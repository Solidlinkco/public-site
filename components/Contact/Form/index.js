import React, { useState } from 'react';
import { StyledFormWrapper, StyledInputWrapper } from './styled';
import { Form, Formik } from 'formik';
import { initialValues, contactFields, schema } from './constant';
import InputField from './InputField';
import StyledButton from '../../atoms/StyledButton';
import axios from 'axios';
import { toast } from 'react-toastify';
// import Map from './Map';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const onSubmit = (values) => {
        setLoading(true);
        axios
            .post('/api/contact', values)
            .then(({ data }) => {
                toast(data?.ok ? 'Message successfully sent!' : 'Server error, please try again!', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .finally(() => setLoading(false));
    };
    return (
        <div className="col-12 centered collapse-mobile">
            <div className="col-10 centered collapse-mobile">
                <StyledFormWrapper>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={onSubmit}
                        enableReinitialize
                        validateOnBlur
                    >
                        <Form>
                            <StyledInputWrapper>
                                {contactFields.map((el) => (
                                    <InputField {...el} key={el?.name} />
                                ))}
                                <StyledButton type="submit" height="48px">
                                    {loading ? <div class="spinner">&nbsp;</div> : 'Submit'}
                                </StyledButton>
                            </StyledInputWrapper>
                        </Form>
                    </Formik>
                    <iframe
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?q=Sallybrook%20Cork%2C%20T45%20R250%20Ireland&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
                        title="%3$s"
                        aria-label="%3$s"
                    ></iframe>
                </StyledFormWrapper>
            </div>
        </div>
    );
};

export default ContactForm;
