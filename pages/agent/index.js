import React from 'react';
import AgentComponent from '../../components/agent-component';
import { graphcms } from '../../config';
import { GET_CONTACTS, GET_TEAM } from '../../queries';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { ourTeams } = await graphcms.request(GET_TEAM);

    return {
        props: {
            contacts,
            ourTeam: ourTeams[0],
        },
    };
}

const OurTeamPage = ({ contacts, ourTeam }) => {
    return <AgentComponent contacts={contacts} ourTeam={ourTeam} />;
};

export default OurTeamPage;
