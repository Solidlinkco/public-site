import React from 'react';
import { usePaystackPayment } from 'react-paystack';
import useSearch from '../../../hooks/useSearch';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useFormikContext } from 'formik';
import { composeEmail } from './compose-email';
import { getBase64 } from './getBase64';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const usePayWithPaystack = ({ files, setFiles }) => {
    const [searchParams, setSearchParams] = useSearch();
    const referenceRef = React.useRef(null);
    const { values, resetForm, setSubmitting } = useFormikContext();

    const payStackConfig = React.useMemo(
        () => ({
            publicKey: process.env.paystackPublicKey,
            email: searchParams.email,
            amount: 1000000, // NGN 10,000
            firstName: searchParams.firstName,
            lastName: searchParams.lastName,
            reference: searchParams.reference,
            channels: ['card', 'bank', 'mobile_money', 'ussd', 'qr'],
        }),
        [searchParams]
    );

    // init paystack
    const initializePayment = usePaystackPayment(payStackConfig);

    const onSuccess = React.useCallback(async () => {
        try {
            const verifyPayment = await axios.post('/api/confirm-payment', {
                data: {
                    reference: referenceRef.current,
                },
            });

            const isSuccessFul = verifyPayment.data?.result?.data?.status === 'success';

            if (verifyPayment.data?.ok && isSuccessFul) {
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
                        mailContent: `Payment Reference: ${referenceRef.current} \n${mailContent}`,
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
                    resetForm();
                    setSubmitting(false);
                    setSearchParams({});
                    setFiles([]);
                } else {
                    toast(ERROR_MESSAGE, {
                        type: 'error',
                    });
                }
            } else {
                toast(ERROR_MESSAGE, {
                    type: 'error',
                });
            }
        } catch (e) {
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        }
    }, [files, values]);

    const onClose = React.useCallback(() => {
        resetForm();
        setSubmitting(false);
        setSearchParams({});
        setFiles([]);
    }, []);

    React.useEffect(() => {
        if (
            !isEmpty(searchParams?.reference) &&
            !isEmpty(searchParams?.email) &&
            referenceRef.current !== searchParams.reference
        ) {
            referenceRef.current = searchParams.reference;
            initializePayment(onSuccess, onClose);
        }
    }, [initializePayment, searchParams]);
};
