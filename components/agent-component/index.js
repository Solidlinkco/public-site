import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../ui/Layout';
import HeroSection from './hero-section';
import TextSection from './text-sections';
import { textContents } from './text-sections/constant';
import DidYouKnow from './did-you-know-section';
import FlexibleFrame from '../ui/FlexibleFrame';

const AgentComponents = ({ contacts, agent }) => {
    return (
        <Layout contacts={contacts}>
            <HeroSection heroImage={agent?.heroImage} />
            <TextSection data={textContents[0]} />

            <DidYouKnow />

            <TextSection data={textContents[1]} reverse>
                <div style={{ minHeight: '356px' }}>
                    <FlexibleFrame
                        src={`https://ams4you.net/panel/webinq.php?ag=7386&wfid=922&url=agent&ptit=agent`}
                        title="agent-contact"
                        height={`${356}px`}
                    />
                </div>
            </TextSection>
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
