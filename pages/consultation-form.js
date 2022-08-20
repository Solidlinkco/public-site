import * as React from 'react';

import ConsultationFormComponent from '../components/consultation-form';
import { graphcms } from '../config';
import { GET_CONTACTS, GET_OUR_STORY } from '../queries';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            contacts,
        },
    };
}

function ConsultationForm({ contacts, ourStory }) {
    return (
        <div>
            <ConsultationFormComponent contacts={contacts} />
        </div>
    );
}

export default ConsultationForm;
