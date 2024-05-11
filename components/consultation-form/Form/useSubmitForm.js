import * as React from 'react';
import axios from 'axios';
import useSearch from '../../../hooks/useSearch';
import { toast } from 'react-toastify'; 
import { composeEmail } from './compose-email';
import { getBase64 } from './getBase64';
const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';
import {pingDiscordAsync} from "./ping-discord";

export const useSubmitForm = ({ setFiles }) => {
    const [, setSearchParams] = useSearch();

    const handleSubmitAction = React.useCallback(async ({ values, files }, actions) => {
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
                    mailContent,
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
                toast('Form successfully submitted, please continue with payment', {
                    type: 'success',
                });
                setSearchParams({
                    email: values.email,
                    firstName: values.firstName,
                    lastName: values.lastName,
                });
                setFiles([]);
                actions.setSubmitting(false);
                actions.resetForm();

            } else {
                actions.setSubmitting(false);
                pingDiscordAsync(`
                    **Consultation Form Submission Failed - else**
                    **Error**: ${JSON.stringify(response.data, null, 2) || ""}
                    **Values**: ${JSON.stringify(values)} 
                `)
                toast(ERROR_MESSAGE, {
                    type: 'error',
                });
            }
        } catch (e) {
             pingDiscordAsync(`
                    **Consultation Form Submission Failed - catch**
                    **Error**: ${e.message || ""} ${JSON.stringify(e.cause || {})}
                    **Values**: ${JSON.stringify(values)} 
                `)
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        }
    }, []);

    return {
        handleSubmitAction,
    };
};
