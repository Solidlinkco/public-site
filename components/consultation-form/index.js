import React from 'react';
import Form from './Form';
import Layout from '../ui/Layout';

const ConsultationForm = ({ contacts }) => {
    return (
        <Layout contacts={contacts}>
            <div className="col-12 centered collapse-mobile">
                <h2>SOLID-LINK CONSULTATION FORM</h2>
                <Form />
            </div>
        </Layout>
    );
};

export default ConsultationForm;
