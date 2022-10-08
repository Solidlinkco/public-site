import React from 'react';
import AgentComponent from '../../components/agent-component';
import { graphcms } from '../../config';
import { GET_CONTACTS, GET_TEAM } from '../../queries';
import Head from 'next/head';

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

const Agent = ({ contacts, ourTeam }) => {
    return (
        <>
            <Head>
                <title> Solid-Link EDU Consulting | Agent</title>
            </Head>{' '}
            <AgentComponent contacts={contacts} ourTeam={ourTeam} />{' '}
        </>
    );
};

export default Agent;
