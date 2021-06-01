import Homepage from "../components/Homepage";
import { graphcms } from "../config";
import { GET_CONTACTS, GET_HOMEPAGE } from "../queries";

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { homepages } = await graphcms.request(GET_HOMEPAGE);
    return {
        props: {
            contacts,
            homepages,
        },
    };
}

export default function Home({ contacts, homepages }) {
    return <Homepage contacts={contacts} homepage={homepages[0]} />;
}
