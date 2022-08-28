import React from 'react';
import { getBase64 } from './getBase64';
import isEmpty from 'lodash/isEmpty';
import { contactFields } from './constant';
import { toast } from 'react-toastify';
import axios from 'axios';

const ERROR_MESSAGE = 'Something went wrong, please try again or contact support.';

const composeEmail = (values) => {
    const keyArray = Object.keys(values);

    const valueArray = keyArray.map((key) => {
        const labelFinder = contactFields.find((field) => {
            if (field.inputs) {
                return field.inputs?.find((child) => child.name === key);
            }

            return field.name === key;
        });

        const label = labelFinder?.label || labelFinder?.find((input) => input.name === key)?.label;

        return `\n${label}: ${values[key] || 'Null'}`;
    });

    const emailBody = `
        ${valueArray.join('\n')}
    `;

    return emailBody;
};

export const useSubmitForm = () => {
    const handleSubmitAction = async ({ values, files }) => {
        try {
            const mailContent = composeEmail(values);

            // let  = [];
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

            const response = await axios.post('/api/consultation', {
                mailContent,
                attachments,
            });

            if (response.data?.ok) {
                toast('Form successfully submitted.', {
                    type: 'success',
                });
                return;
            }

            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        } catch (e) {
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        }
    };

    return {
        handleSubmitAction,
    };
};
