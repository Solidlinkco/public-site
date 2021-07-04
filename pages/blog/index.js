import { graphcms } from '../../config';
import { GET_BLOGS, GET_CONTACTS } from '../../queries';
import Blogs from '../../components/Blogs';
import Layout from '../../components/ui/Layout';

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

export default function Home({ blogs, contacts }) {
    return (
        <Layout contacts={contacts}>
            <Blogs blogs={blogs} />
        </Layout>
    );
}
