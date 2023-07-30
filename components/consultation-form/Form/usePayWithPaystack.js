import React from 'react';
import { useRouter } from 'next/router';
import { usePaystackPayment,  } from 'react-paystack';
import useSearch from '../../../hooks/useSearch';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormikContext } from 'formik';
import { composeEmail } from './compose-email';
import { getBase64 } from './getBase64';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const usePayWithPaystack = ({ files, setFiles }) => {
    const [searchParams, setSearchParams] = useSearch();
    const triggeredPaymentRef = React.useRef(false);
    const triggeredPaymentReferenceCallback = React.useRef(false);
    const router = useRouter();

    const { values, resetForm, setSubmitting } = useFormikContext();
    const [paymentReference, setPaymentReference] = React.useState(null);

    const payStackConfig = React.useMemo(
        () => ({
            publicKey: process.env.paystackPublicKey,
            email: searchParams.email,
            amount: 2000000, // NGN 20,000
            firstName: searchParams.firstName,
            lastName: searchParams.lastName,
            channels: ['card', 'bank', 'mobile_money', 'ussd', 'qr'],
        }),
        [searchParams]
    );

    // init paystack
    const initializePayment = usePaystackPayment(payStackConfig);

    const onSuccess = (result) => {

        const isSuccessFul = result?.status?.toLowerCase() === 'success';

        if (isSuccessFul) {
            setPaymentReference(result.reference);
            return;
        } 

        setSubmitting(false);
        setSearchParams({});
        setPaymentReference(null);
       
           
        toast(ERROR_MESSAGE, {
            type: 'error',
        });
    };

    const onSuccessCallback = React.useCallback(async (paymentReference) => {
            try {   
                //compose email
                const mailContent = composeEmail(values);

                //convert attachments to base64
                const attachments = await Promise.all(
                    files.map(({ file, ...rest }) => {
                        return getBase64(file, { ...rest });
                    })
                ).then((base64Images) => {
                    const composedAttachements = base64Images.map((base64Image) => {
                        return {
                            content: `${base64Image.base64.split('base64,')[1]}`,
                            filename: `${base64Image.rest[0].inputId}.${base64Image.rest[0].fileName.split('.').pop()}`,
                            type: base64Image.file.type,
                            disposition: 'attachment',
                        };
                    });
                    return composedAttachements;
                });

                //send email
                const response = await axios.post(
                    '/api/consultation',
                    {
                        mailContent: `Payment Reference: ${paymentReference} \n${mailContent}`,
                        attachments: attachments,
                        customerEmail: values.email,
                    }
                    // {
                    //     onUploadProgress: (progressEvent) => {
                    //         const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);

                    //         console.log(progressEvent, percentCompleted);
                    //     },
                    // }
                );

                if (response.data?.ok) {
                    toast('Form successfully submitted.', {
                        type: 'success',
                    });
            setSearchParams({});
                    resetForm();
                    setSubmitting(false);
                    setFiles([]);
                } else {
                    setSubmitting(false);
                    toast(ERROR_MESSAGE, {
                        type: 'error',
                    });
                }
            }  catch (e) {
            toast(ERROR_MESSAGE, {
                type: 'error',
            }) 
         }finally{
            setPaymentReference(null);

            setTimeout(() => {
                router.push('/consultation-form');
            }, 3000);
            
            }

            
    }, [files, values]);

    const onClose = React.useCallback(() => {
        setSearchParams({});
        resetForm();
        setSubmitting(false);
        setFiles([]);
        triggeredPaymentReferenceCallback.current = false;
        router.push('/consultation-form');
    }, []);

    React.useEffect(() => {
        if (
            searchParams?.email && !triggeredPaymentRef.current
        ) {
            triggeredPaymentRef.current = true;
            initializePayment(onSuccess, onClose);
        }
    }, [initializePayment, searchParams?.email]);




    React.useEffect(() => {

        if(paymentReference && !triggeredPaymentReferenceCallback.current) {
            triggeredPaymentReferenceCallback.current = true;
            onSuccessCallback(paymentReference);
        }
    },[onSuccessCallback, paymentReference]);
};
