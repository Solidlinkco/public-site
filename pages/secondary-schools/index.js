import React from 'react';
import Schools from '../../components/Schools';
import { graphcms } from '../../config';

import { GET_CONTACTS, GET_SCHOOLS } from '../../queries';
import Layout from '../../components/ui/Layout';

export async function getStaticProps() {
    const { contacts } = await graphcms.request(GET_CONTACTS);
    const { schools } = await graphcms.request(GET_SCHOOLS);

    const secondarySchools = schools.filter((school) => school.isSecondarySchool);

    return {
        props: {
            contacts,
            schools: secondarySchools,
        },
    };
}

const SecondarySchoolPage = ({ contacts, schools }) => {
    return (
        <Layout contacts={contacts}>
            <Schools title={'Secondary schools'} schools={schools} />
        </Layout>
    );
};

export default SecondarySchoolPage;
