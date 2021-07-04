import { graphcms } from '../../config';
import { GET_EVENTS, GET_CONTACTS } from '../../queries';
import Events from '../../components/Events';
import Layout from '../../components/ui/Layout';

export async function getStaticProps() {
    const { events } = await graphcms.request(GET_EVENTS);
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            events,
            contacts,
        },
    };
}

export default function Home({ events, contacts }) {
    return (
        <Layout contacts={contacts}>
            <Events events={events} />
        </Layout>
    );
}
