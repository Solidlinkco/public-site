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
                Interested in studying in Canada, UK, Ireland or other top European countries? Take the
                first step by leaving your contact info and we will be in touch with you shortly.
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
              <p className="fz-20 fw-700">Visit us</p>
              <p>{address?.value}</p>
            </div>
          )}
          {phone && (
            <div>
              <PhoneEnabledIcon />
              <p className="fz-20 fw-700">Call us</p>
              {phone
                ?.filter((el) => !el.value?.includes?.('+234'))
                ?.map((el) => (
                  <p class="fz-18 fw-700" style={{ color: '#400436' }} key={el?.value}>
                    <a className="fz-18" href={`tel:${el?.value}`}>{el?.value}</a>
                    
                  </p>
                ))}
            </div>
          )}
          {email && (
            <div>
              <MailOutlineIcon />
              <p className="fz-20 fw-700">Contact us</p>
               <a className="fz-18" href={`mailto:${email?.value}`}>{email?.value}</a>
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
            <p className="fz-20 fw-700">Visit us</p>
            <p>
              Solid-Link Consulting, 3rd Floor, 13A Ayo Babatunde Crescent Oniru, Opposite Lekki Phase One
              Lagos.
            </p>
          </div>
          <div>
            <PhoneEnabledIcon />
            <p className="fz-20 fw-700">Call us</p>
            <p className="fz-18 fw-700" style={{ color: '#400436' }}>
            <a className="fz-18" href="tel:+2349133700236">+2349133700236</a>
              
            </p>
          </div>

          {email && (
            <div>
              <MailOutlineIcon />
              <p className="fz-20 fw-700">Contact us</p>
               <a className="fz-18" href={`mailto:${email?.value}`}>{email?.value}</a>
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
            <p className="fz-20 fw-700">Visit us</p>
            <p>
              Solid-Link Consulting, Thermocool Showroom, Beside Eco-Bank, Ring Road Area,
              Challenge, Ibadan.
            </p>
          </div>

          <div>
            <PhoneEnabledIcon />
            <p className="fz-20 fw-700">Call us</p>
            <p className="fz-18 fw-700" style={{ color: '#400436' }}>
              <a className="fz-18" href="tel:+2349085500067">+2349085500067</a>
            </p>
          </div>

          {email && (
            <div>
              <MailOutlineIcon />
              <p className="fz-20 fw-700">Contact us</p>
               <a className="fz-18" href={`mailto:${email?.value}`}>{email?.value}</a>
            </div>
          )}
        </StyledContactCards>
      </div>

      <div className="col-12 centered collapse-mobile">
        <H2 fontWeight="700" color="#400436" margin="0 0 24px 0" textAlign="center">
          Ilorin Office
        </H2>
        <StyledContactCards>
          <div>
            <BusinessIcon />
            <p className="fz-20 fw-700">Visit us</p>
            <p>
              Solid-Link Consulting, 62, NNPC Pipeline Road, Gaa-Akanbi, Ilorin.
            </p>
          </div>

          <div>
            <PhoneEnabledIcon />
            <p className="fz-20 fw-700">Call us</p>
            <p className="fz-18 fw-700" style={{ color: '#400436' }}>
            <a className="fz-18" href="tel:+2348032294612">+2348032294612</a>
            </p>
          </div>

          {email && (
            <div>
              <MailOutlineIcon />
              <p className="fz-20 fw-700">Contact us</p>
              <p>
              <a className="fz-18" href={`mailto:${email?.value}`}>{email?.value}</a>
              </p>
            </div>
          )}
        </StyledContactCards>
      </div>
      <Form />
    </>
  );
};

export default ContactUs;
