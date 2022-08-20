import * as React from 'react';
import { Form, Formik } from 'formik';
import { initialValues, contactFields, schema } from './constant';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import classes from './styled.module.scss';
import { contactFormPromise } from '../../../../utils/contactFormPromise';
import { toast } from 'react-toastify';

const ERROR_MESSAGE = 'Something went wrong, please try again.';

const ContactForm = () => {
    const handleSubmit = async (values, actions) => {
        actions.setSubmitting(true);

        try {
            // send form data to backend
            const response = await contactFormPromise({ ...values, type: 'CONTACT_FORM' });

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
            toast(ERROR_MESSAGE, {
                type: 'error',
            });
        } finally {
            actions.setSubmitting(false);
            actions.resetForm();
        }
    };

    return (
        <div className="col-7 centered collapse-mobile">
            <div className={classes.FormWrapper} id="form">
                <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                    <Form>
                        <div className={classes.FormWrapper}>
                            {contactFields.map((field, index) => {
                                return (
                                    <InputField
                                        key={field.name}
                                        name={field.name}
                                        label={field.label}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        required={field.required}
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

export default ContactForm;
