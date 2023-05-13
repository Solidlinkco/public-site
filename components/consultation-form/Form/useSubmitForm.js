import * as React from 'react';
import useSearch from '../../../hooks/useSearch';
import { toast } from 'react-toastify';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const useSubmitForm = () => {
    const [, setSearchParams] = useSearch();

    const handleSubmitAction = React.useCallback(async ({ values }) => {
        try {
            setSearchParams({
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
            });
        } catch (e) {
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        }
    }, []);

    return {
        handleSubmitAction,
    };
};
