import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../ui/Layout';
import HeroSection from './hero-section';
import TextSection from './text-sections';
import { textContents } from './text-sections/constant';
import DidYouKnow from './did-you-know-section';

const AgentComponents = ({ contacts, agent }) => {
    return (
        <Layout contacts={contacts}>
            <HeroSection heroImage={agent?.heroImage} />
            <TextSection data={textContents[0]} />

            <DidYouKnow />

            <TextSection data={textContents[1]} reverse />
        </Layout>
    );
};

AgentComponents.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
};

export default AgentComponents;
