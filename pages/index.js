import Layout from "../components/ui/Layout";
import { graphcms } from "../config";
import { GET_CONTACTS } from "../queries";

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            contacts,
        },
    };
}

export default function Home({ contacts }) {
    return (
        <Layout contacts={contacts}>
            <div style={{ minHeight: "100vh" }}>
                <h3>And it begins || Solid-link-co</h3>
            </div>
        </Layout>
    );
}
