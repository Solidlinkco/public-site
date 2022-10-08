import React from 'react';
import OurStoryComponents from '../../components/our-story';
import { graphcms } from '../../config';
import { GET_CONTACTS, GET_OUR_STORY } from '../../queries';
import Head from 'next/head';
export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { ourStories } = await graphcms.request(GET_OUR_STORY);

    return {
        props: {
            contacts,
            ourStory: ourStories[0],
        },
    };
}

const OurStoryPage = ({ contacts, ourStory }) => {
    return (
        <>
            <Head>
                <title> Solid-Link EDU Consulting | Our Story</title>
            </Head>{' '}
            <OurStoryComponents contacts={contacts} ourStory={ourStory} />{' '}
        </>
    );
};

export default OurStoryPage;
