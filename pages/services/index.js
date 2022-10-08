import React from 'react';
import Services from '../../components/Services';
import { graphcms } from '../../config';
import Head from 'next/head';
import { GET_SERVICES_PAGE, GET_CONTACTS } from '../../queries';
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
        <>
            <Head>
                <title>Solid-Link EDU Consulting | Services</title>
            </Head>
            <Layout contacts={contacts}>
                <Services servicesCards={servicesCards} />
            </Layout>
        </>
    );
};

export default ServicesPage;
