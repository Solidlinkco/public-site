import React, { useState } from 'react';
import { StyledFormWrapper, StyledInputWrapper } from './styled';
import { Form, Formik } from 'formik';
import { initialValues, contactFields, schema } from './constant';
import InputField from './InputField';
import StyledButton from '../../atoms/StyledButton';
import axios from 'axios';
import FlexibleFrame from '../../ui/FlexibleFrame';

const isBrowser = () => typeof window !== 'undefined';

const ContactForm = () => {
    return (
        <div className="col-12 centered collapse-mobile">
            <div className="col-10 centered collapse-mobile">
                <StyledFormWrapper>
                    <form>
                        {isBrowser() && (
                            <FlexibleFrame
                                src={`https://ams4you.net/panel/webinq.php?ag=7386&wfid=750&url=contact-us&ptit=contact-us`}
                                title="contact-us"
                            />
                        )}
                    </form>
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
