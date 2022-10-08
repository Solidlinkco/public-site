import { graphcms } from '../../config';
import { GET_BLOGS, GET_CONTACTS } from '../../queries';
import Blogs from '../../components/Blogs';
import Layout from '../../components/ui/Layout';
import Head from 'next/head';
export async function getStaticProps() {
    const { blogs } = await graphcms.request(GET_BLOGS);
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            blogs,
            contacts,
        },
    };
}

export default function Articles({ blogs, contacts }) {
    return (
        <>
            <Head>
                <title> Solid-Link EDU Consulting | Articles</title>
            </Head>
            <Layout contacts={contacts}>
                <Blogs blogs={blogs} />
            </Layout>
        </>
    );
}
