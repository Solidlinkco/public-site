import * as React from 'react';
import { usePaystackPayment } from 'react-paystack';
import useSearch from '../../../hooks/useSearch';
import { STORAGE_KEY } from './storage-key';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';
import { toast } from 'react-toastify';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const usePayWithPaystack = () => {
    const [searchParams, setSearchParams] = useSearch();
    const referenceRef = React.useRef(null);

    const payStackConfig = React.useMemo(
        () => ({
            publicKey: process.env.paystackPublicKey,
            email: searchParams.email,
            amount: 1000000,
            firstName: searchParams.firstName,
            lastName: searchParams.lastName,
            reference: searchParams.reference,
            channels: ['card', 'bank', 'mobile_money', 'ussd', 'qr'],
        }),
        [searchParams]
    );

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
                const mailData = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');

                const response = await axios.post('/api/consultation', {
                    mailContent: `Payment Reference: ${referenceRef.current} \n${mailData.mailContent}`,
                    attachments: mailData.attachments,
                    customerEmail: mailData.customerEmail,
                });
                sessionStorage.removeItem(STORAGE_KEY);
                setSearchParams({});

                if (response.data?.ok) {
                    toast('Form successfully submitted.', {
                        type: 'success',
                    });
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
    }, []);

    const onClose = React.useCallback(() => {
        sessionStorage.removeItem(STORAGE_KEY);
        setSearchParams({});
    }, []);

    React.useEffect(() => {
        const savedConfig = JSON.parse(sessionStorage.getItem(STORAGE_KEY));

        if (
            !isEmpty(savedConfig) &&
            !isEmpty(searchParams?.reference) &&
            !isEmpty(searchParams?.email) &&
            referenceRef.current !== searchParams.reference
        ) {
            referenceRef.current = searchParams.reference;
            initializePayment(onSuccess, onClose);
        }
    }, [initializePayment, searchParams]);
};
