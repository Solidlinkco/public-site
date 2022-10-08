import * as React from 'react';
import { getBase64 } from './getBase64';

import { STORAGE_KEY } from './storage-key';
import useSearch from '../../../hooks/useSearch';
import { toast } from 'react-toastify';
import { composeEmail } from './compose-email';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

export const useSubmitForm = () => {
    const [, setSearchParams] = useSearch();

    const handleSubmitAction = React.useCallback(async ({ values, files }) => {
        try {
            const mailContent = composeEmail(values);

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

            sessionStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({
                    mailContent,
                    attachments,
                    customerEmail: values.email,
                })
            );
            setSearchParams({
                email: values.email,
                firstName: values.firstName,
                lastName: values.lastName,
                reference: `${values.firstName}-${values.lastName}-${new Date().toISOString()}`
                    .replace(/:/g, '_')
                    .replace(/@/g, '__')
                    .replace(/\./g, '___'),
            });

            // const response = await axios.post('/api/consultation', {
            //     mailContent,
            //     attachments,
            // });

            // if (response.data?.ok) {
            //     toast('Form successfully submitted.', {
            //         type: 'success',
            //     });
            //     return;
            // }

            // toast(ERROR_MESSAGE, {
            //     type: 'error',
            // });
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
