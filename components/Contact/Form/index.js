import React, { useState } from 'react';
import { StyledFormWrapper, StyledInputWrapper } from './styled';
import { Form, Formik } from 'formik';
import { initialValues, contactFields, schema } from './constant';
import InputField from './InputField';
import StyledButton from '../../atoms/StyledButton';
import axios from 'axios';
import { toast } from 'react-toastify';
// import Map from './Map';

function CreatedDateLocal() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    return yyyy + '-' + mm + '-' + dd + ' ' + hr + ':' + min + ':' + sec;
}
const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const onSubmit = (values) => {
        setLoading(true);

        const formData = new FormData();
        formData.append('CreatedDateLocal', CreatedDateLocal());
        formData.append('FirstName', values.fullName.split(' ')[0]);

        axios.post('/api/contact', values).then((response) => console.log(response));
        // axios
        //     .post('/api/contact', values)
        //     .then(({ data }) => {
        //         console.log('🚀 ~ file: index.js ~ line 18 ~ .then ~ data', data);
        //         toast(data?.ok ? 'Message successfully sent!' : 'Server error, please try again!', {
        //             position: 'top-right',
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //         });
        //     })
        //     .finally(() => setLoading(false));
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
                        nonce="gmaps"
                    ></iframe>
                </StyledFormWrapper>
            </div>
        </div>
    );
};

export default ContactForm;
