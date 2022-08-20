import * as React from 'react';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import { initialValues, contactFields, schema } from './constant';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import classes from './styled.module.scss';
import { FileInput } from './FileInput';
import { getBase64 } from './getBase64';
// import { jobApplicationFormPromise } from '../../../utils/jobApplicationFormPromise';

const FILE_ERROR_MESSAGE = 'CV is required';
const ERROR_MESSAGE = 'Something went wrong, please try again.';

const JobApplicationForm = ({ role }) => {
    const [files, setFiles] = React.useState([]);
    const [fileErrorMessage, setFileErrorMessage] = React.useState(null);

    const handleSubmit = async (values, actions) => {
        actions.setSubmitting(true);

        try {
            const attachments = files.map(async ({ file }) => {
                const { error, base64 } = await getBase64(files);

                return {
                    filename: file.inputId,
                    content: base64,
                };
            });
            // get base64 encoded file
            // const { error, base64 } = await getBase64(files);

            await new Promise((resolve) =>
                setTimeout(
                    resolve({
                        ...values,
                        attachments,
                    }),
                    6000
                )
            );

            // send form data to backend
            // const response = await jobApplicationFormPromise();

            if (response.status !== 200) {
                toast(ERROR_MESSAGE, {
                    type: 'error',
                });
                return;
            }

            toast('Form successfully submitted.', {
                type: 'success',
            });
        } catch {
            // catch errors
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        } finally {
            actions.setSubmitting(false);
            actions.resetForm();
            setFile(null);
        }
    };

    return (
        <div className="col-10 centered collapse-mobile">
            <h2 className={classes.Heading}>Apply by sending your CV</h2>
            <div className="col-10 centered collapse-mobile">
                <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    <Form>
                        <div className={classes.FormWrapper}>
                            {contactFields.map((field, index) => {
                                if (field.type === 'file') {
                                    return (
                                        <FileInput
                                            key={field.name}
                                            name={field.name}
                                            label={field.label}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            required={field.required}
                                            files={files}
                                            setFiles={setFiles}
                                            fileErrorMessage={fileErrorMessage}
                                            fullWidth={true}
                                        />
                                    );
                                }
                                return (
                                    <InputField
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
                                        options={field.options}
                                        pattern={field.pattern}
                                        fullWidth={field.fullWidth}
                                    />
                                );
                            })}
                        </div>

                        <SubmitButton />
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default JobApplicationForm;
