import React from 'react';
import { StyledWrapper, StyledContactCards } from './styled';
import BusinessIcon from '@material-ui/icons/BusinessRounded';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabledRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutlineRounded';
import Form from './Form';
import { ToastContainer } from 'react-toastify';

const ContactUs = ({ contact }) => {
    const address = contact.find((el) => el.type === 'address');
    const phone = contact.filter((el) => el.type === 'phone');
    const email = contact.find((el) => el.type === 'email');
    return (
        <>
            <StyledWrapper>
                <div className="contact-page-banner">
                    <div>
                        <div>
                            <h1>Contact us</h1>
                            <p className="fz-18">
                                Need an expert? You are more than welcomed to leave your contact info and we will be in
                                touch shortly
                            </p>
                        </div>
                    </div>
                </div>
            </StyledWrapper>
            <div className="col-12 centered collapse-mobile">
                <StyledContactCards>
                    {address && (
                        <div>
                            <BusinessIcon />
                            <p class="fz-20 fw-700">Visit us</p>
                            <p>{address?.value}</p>
                        </div>
                    )}
                    {phone && (
                        <div>
                            <PhoneEnabledIcon />
                            <p class="fz-20 fw-700">Call us</p>
                            {phone?.map((el) => (
                                <p class="fz-18 fw-700" key={el?.value}>
                                    {el?.value}
                                </p>
                            ))}
                        </div>
                    )}
                    {email && (
                        <div>
                            <MailOutlineIcon />
                            <p class="fz-20 fw-700">Contact us</p>
                            <p>{email?.value}</p>
                        </div>
                    )}
                </StyledContactCards>
            </div>
            <Form />
            <ToastContainer
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default ContactUs;
