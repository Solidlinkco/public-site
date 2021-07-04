import Homepage from '../components/Homepage';
import { graphcms } from '../config';
import { GET_CONTACTS, GET_HOMEPAGE } from '../queries';
import axios from 'axios';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { homepages, reviews, servicesCards, blogs, events } = await graphcms.request(GET_HOMEPAGE);
    const instaArr = [];

    // const insta = await axios.get(`https://graph.instagram.com/me?fields=media&access_token=${process.env.instaToken}`);

    // const instaToFetch = insta?.data?.media?.data?.splice(0, 5).map(({ id }) => {
    //     return axios.get(`https://graph.instagram.com/${id}?fields=media_url&access_token=${process.env.instaToken}`).then((res) => {
    //         instaArr.push(res?.data?.media_url);
    //     });
    // });
    // const fetchALlImages = await axios.all(instaToFetch);

    return {
        props: {
            contacts,
            homepages,
            reviews,
            servicesCards,
            blog: blogs[1] ?? {},
            instaData: instaArr ?? [],
            events: events ?? [],
        },
    };
}

export default function Home({ contacts, homepages, reviews, servicesCards, instaData = [], blog, events }) {
    return (
        <Homepage
            contacts={contacts}
            homepage={homepages[0]}
            reviews={reviews}
            servicesCards={servicesCards}
            instaData={instaData}
            blog={blog}
            events={events}
        />
    );
}
