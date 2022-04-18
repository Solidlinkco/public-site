import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../ui/Layout';
import HeroSection from './hero-section';
import StoryContent from './story-section';
import Stats from '../Homepage/Stats';
import Gallery from './gallery';
import DidYouKnow from './did-you-know-section';

const OurStoryComponents = ({ contacts, ourStory }) => {
    return (
        <Layout contacts={contacts}>
            <HeroSection heroImage={ourStory?.heroImage} />
            <StoryContent ourStory={ourStory} />
            <Stats />
            <DidYouKnow didYouKnow={ourStory.didYouKnow} />
            <Gallery images={ourStory.gallery} />
        </Layout>
    );
};

OurStoryComponents.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
    ourStory: string.isRequired,
};

export default OurStoryComponents;
