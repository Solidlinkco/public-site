import * as React from 'react';
import Head from 'next/head';
import BloomPageComponent from '../components/Bloom';
import { graphcms } from '../config';
import { GET_CONTACTS, GET_SCHOOLS } from '../queries';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { schools } = await graphcms.request(GET_SCHOOLS);

    return {
        props: {
            contacts,
            schools: schools || [],
        },
    };
}

function BloomPage({ contacts, schools }) {
    return (
        <>
            <Head>
                <title>Solid-Link EDU Consulting | Bloom</title>
            </Head>
            <div>
                <BloomPageComponent contacts={contacts} schools={schools} />
            </div>
        </>
    );
}

export default BloomPage;
