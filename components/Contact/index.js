import React from 'react';
import { StyledWrapper, StyledContactCards } from './styled';
import BusinessIcon from '@material-ui/icons/BusinessRounded';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabledRounded';
import MailOutlineIcon from '@material-ui/icons/MailOutlineRounded';
import Form from './Form';
import { H2 } from '../atoms/H2';

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
            <br />
            <br />
            <div className="col-12 centered collapse-mobile">
                <H2 fontWeight="700" color="#400436" margin="0 0 24px 0" textAlign="center">
                    Ireland Office
                </H2>
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
                            {phone
                                ?.filter((el) => !el.value?.includes?.('+234'))
                                ?.map((el) => (
                                    <p class="fz-18 fw-700" style={{ color: '#400436' }} key={el?.value}>
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

            <div className="col-12 centered collapse-mobile">
                <H2 fontWeight="700" color="#400436" margin="0 0 24px 0" textAlign="center">
                    Lagos Office
                </H2>
                <StyledContactCards>
                    <div>
                        <BusinessIcon />
                        <p class="fz-20 fw-700">Visit us</p>
                        <p>
                            Solid-Link Consulting,3rd Floor, 13A Ayo Babatunde Crescent Oniru, Opposite Lekki Phase One
                            Lagos.
                        </p>
                    </div>
                    <div>
                        <PhoneEnabledIcon />
                        <p class="fz-20 fw-700">Call us</p>
                        <p class="fz-18 fw-700" style={{ color: '#400436' }}>
                            +2348163000102
                        </p>
                    </div>

                    {email && (
                        <div>
                            <MailOutlineIcon />
                            <p class="fz-20 fw-700">Contact us</p>
                            <p>{email?.value}</p>
                        </div>
                    )}
                </StyledContactCards>
            </div>

            <div className="col-12 centered collapse-mobile">
                <H2 fontWeight="700" color="#400436" margin="0 0 24px 0" textAlign="center">
                    Ibadan Office
                </H2>
                <StyledContactCards>
                    <div>
                        <BusinessIcon />
                        <p class="fz-20 fw-700">Visit us</p>
                        <p>
                            Solid-Link Consulting, opposite Thermocool showroom Beside Eco-Bank ring road area
                            Challenge, Ibadan.
                        </p>
                    </div>

                    <div>
                        <PhoneEnabledIcon />
                        <p class="fz-20 fw-700">Call us</p>
                        <p class="fz-18 fw-700" style={{ color: '#400436' }}>
                            +2347038695395
                        </p>
                    </div>

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
        </>
    );
};

export default ContactUs;
