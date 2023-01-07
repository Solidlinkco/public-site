import * as React from 'react';
import { STORAGE_KEY } from './storage-key';
import useSearch from '../../../hooks/useSearch';
import { toast } from 'react-toastify';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const useSubmitForm = () => {
    const [, setSearchParams] = useSearch();

    const handleSubmitAction = React.useCallback(async ({ values, files }) => {
        try {
            setSearchParams({
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                reference: `${values.firstName}-${values.lastName}-${new Date().toISOString()}`
                    .replace(/:/g, '_')
                    .replace(/@/g, '__')
                    .replace(/\./g, '___'),
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
