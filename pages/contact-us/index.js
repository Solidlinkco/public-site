import { graphcms } from '../../config';
import { GET_CONTACTS } from '../../queries';
import ContactUs from '../../components/Contact';
import Head from 'next/head';
import Layout from '../../components/ui/Layout';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            contacts,
        },
    };
}

export default function Contact({ events, contacts }) {
    return (
        <>
            <Head>
                <title> Solid-Link EDU Consulting | Contact</title>
            </Head>
            <Layout contacts={contacts}>
                <ContactUs contact={contacts} />
            </Layout>
        </>
    );
}
