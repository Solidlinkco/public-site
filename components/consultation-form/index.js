import React from 'react';
import dynamic from 'next/dynamic';
// import Form from './Form';
import Layout from '../ui/Layout';
import { ToastContainer } from 'react-toastify';

const DynamicForm =  dynamic(() => import('./Form'), {
    ssr: false,
});

const ConsultationForm = ({ contacts }) => {

     
    return (
        <>
            <Layout contacts={contacts}>
                <div className="col-12 centered collapse-mobile">
                    <DynamicForm />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </Layout>
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

export default ConsultationForm;
