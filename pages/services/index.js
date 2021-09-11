import React from 'react';
import Services from '../../components/Services';
import { graphcms } from '../../config';

import { GET_SERVICES_PAGE, GET_CONTACTS } from '../../queries';
import Blogs from '../../components/Blogs';
import Layout from '../../components/ui/Layout';

export async function getStaticProps() {
    const { servicesCards } = await graphcms.request(GET_SERVICES_PAGE);
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            contacts,
            servicesCards,
        },
    };
}

const ServicesPage = ({ contacts, servicesCards }) => {
    return (
        <Layout contacts={contacts}>
            <Services servicesCards={servicesCards} />
        </Layout>
    );
};

export default ServicesPage;
