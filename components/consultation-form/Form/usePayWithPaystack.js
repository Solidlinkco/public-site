import React from 'react';
import { useRouter } from 'next/router';
import { usePaystackPayment } from 'react-paystack';
import useSearch from '../../../hooks/useSearch';
import { toast } from 'react-toastify';
import {pingDiscordAsync} from "./ping-discord"

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const usePayWithPaystack = ({ files, setFiles }) => {
    const [searchParams, setSearchParams] = useSearch();
    const triggeredPaymentRef = React.useRef(false);
    const router = useRouter();

    const payStackConfig = React.useMemo(
        () => ({
            publicKey: process.env.paystackPublicKey,
            email: searchParams.email,
            amount: 2000000, // NGN 20,000
            firstName: searchParams.firstName,
            lastName: searchParams.lastName,
            channels: ['card', 'bank', 'mobile_money', 'ussd', 'qr'],
        }),
        [searchParams.firstName, searchParams.lastName, searchParams.email]
    );

    // init paystack
    const initializePayment = usePaystackPayment(payStackConfig);



    const onClose = React.useCallback(() => {
        setSearchParams({}); 
       setTimeout(() => {
        router.reload();
       }, 2000);
    }, []);

    const onSuccess = (result) => { 
        const isSuccessFul = result?.status?.toLowerCase() === 'success';

        if (isSuccessFul) {
            toast('Payment Successful.', {
                type: 'success',
            });
            
        } else {
              pingDiscordAsync(JSON.stringify({
                message: `Payment failed for ${searchParams.email}`,
                error: result,
            }, null, 2));
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        } 

            onClose();
    };

  

    React.useEffect(() => {
        if (searchParams?.email && !triggeredPaymentRef.current) { 
            triggeredPaymentRef.current = true;
            initializePayment(onSuccess, onClose); 
        }
    }, [initializePayment, searchParams?.email]);
};
