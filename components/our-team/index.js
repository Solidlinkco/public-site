import React from 'react';
import dynamic from 'next/dynamic';
import { arrayOf, shape, string } from 'prop-types';

import Layout from '../ui/Layout';
import HeroSection from './hero-section';
import TeamMembers from './team-members';
import TextSection from './text-sections';


const TeamMembersDynamic = dynamic(() => import('./team-members'), {
    ssr: false,
});


const OurTeamComponents = ({ contacts, ourTeam }) => {

 
    return (
        <Layout contacts={contacts}>
            <HeroSection heroImage={ourTeam?.heroImage} />
            {ourTeam?.ourFounders.map((founder, index) => (
                <TextSection key={founder.id} data={founder} reverse={index + 1 === ourTeam?.ourFounders.length} />
            ))}

            <TeamMembersDynamic teamMembers={ourTeam?.teamMembers} />
        </Layout>
    );
};

OurTeamComponents.propTypes = {
    contacts: arrayOf(
        shape({
            type: string,
            value: string,
        })
    ).isRequired,
};

export default OurTeamComponents;
