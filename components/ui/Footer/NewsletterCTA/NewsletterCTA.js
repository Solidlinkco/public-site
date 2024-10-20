import * as React from 'react';
import * as Yup from 'yup';
import { 
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';
import { toast, ToastContainer } from 'react-toastify';
import {P24} from "../../../atoms/P24";
import {Formik, Form} from 'formik';
import classes from "./NewsletterCTA.module.scss";
import  {InputField} from "../../../consultation-form/Form/InputField";
import  {SubmitButton} from "../../../consultation-form/Form/SubmitButton";
 
const SCHEMA = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
});
const INITIAL_VALUES = {
    email: '',
};
 
export const NewsletterCTA   = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = React.useCallback(async () => {
      if (!executeRecaptcha) { 
        return;
      }
  
      const token = await executeRecaptcha();
      const res = await fetch('/api/captcha', {
        method: "POST",
        body: token,
        });
        const body = await res.json();
      

        if(body.ok) {
            return true;
        }
        return false;
    }, [executeRecaptcha]);
  

    const handleSubmit = async(values) => {
        const isVerified = await handleReCaptchaVerify();
        if(!isVerified) {
            toast("Captcha failed", {
                type: 'error', 
            });
            return;
        }
         
      try {
        const res =  await fetch('/api/newsletter', {
            method: "POST",
            body: JSON.stringify(values),
        });
        const response = await res.json();


        if(response.ok) {
            toast("Thank you for signing up for our newsletter!", {
                type: 'success', 
            });
        } else {
            toast("Failed to sign up for our newsletter!", {
                type: 'error', 
            });
        } 
      } catch (e) {  
            toast("Failed to sign up for our newsletter!", {
                type: 'error', 
            });
  
    }
    }

return ( 
    <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES} validationSchema={SCHEMA} validateOnBlur>
    <Form>
    <div className={classes.Wrapper}>
         
      <div className={classes.NewsletterTitle}>
      <P24 color="#f49d2a;">
            Sign up for Newsletter to win a chance of a free consultation.
        </P24>
        <div id="captcha-container" className={classes.captchaWrapper}></div>
      </div>
    
      <div className={classes.Inputs}>
      <InputField 
        name="email"
        type="email"
        label=""
        placeholder="Enter your email"
        customClassName={classes.InputField}

/>
<SubmitButton /> 
      </div>

      
    </div>
    </Form>
    </Formik>
      
    
)
}