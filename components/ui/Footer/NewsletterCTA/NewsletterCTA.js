import * as React from 'react';
import * as Yup from 'yup';
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


    const handleSubmit = async(values) => {
         
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
         
      <div>
      <P24 color="#f49d2a;">
            Sign up for Newsletter to win a chance of a free consultation.
        </P24>
      </div>
    
      <div>
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