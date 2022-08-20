import Homepage from '../components/Homepage';
import { graphcms } from '../config';
import { GET_CONTACTS, GET_HOMEPAGE, GET_SCHOOLS } from '../queries';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { homepages, reviews, servicesCards, blogs, events } = await graphcms.request(GET_HOMEPAGE);

    const { schools } = await graphcms.request(GET_SCHOOLS);

    let youtube = [];
    let testimonials = [];

    await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.youtubeChannelID}&maxResults=4&type=video&key=${process.env.youTubeAPIKey}`,
        {
            method: 'GET',
        }
    )
        .then((result) => result.json())
        .then((res) => {
            testimonials = res?.items || [];
        });

    await fetch(
        `  https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=PLaFB9hD00bIvdWngibIs7fC8iVprR5QLv&key=${process.env.youTubeAPIKey}`,
        {
            method: 'GET',
        }
    )
        .then((result) => result.json())
        .then((res) => {
            youtube = res?.items || [];
        });

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
            blog: blogs?.slice(0, 2) ?? {},
            instaData: instaArr ?? [],
            events: events?.slice(0, 2) ?? [],
            schools: schools || [],
            youtube,
            testimonials,
        },
    };
}

export default function Home({
    contacts,
    homepages,
    reviews,
    servicesCards,
    schools,
    instaData = [],
    blog,
    events,
    youtube,
    testimonials,
}) {
    return (
        <Homepage
            contacts={contacts}
            homepage={homepages[0]}
            reviews={reviews}
            servicesCards={servicesCards}
            instaData={instaData}
            blog={blog}
            events={events}
            schools={schools}
            testimonials={testimonials}
            youtube={youtube}
        />
    );
}
