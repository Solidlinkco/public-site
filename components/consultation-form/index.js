import React from 'react';
import dynamic from 'next/dynamic';
// import Form from './Form';
import Layout from '../ui/Layout';

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
            
        </>
    );
};

export default ConsultationForm;
