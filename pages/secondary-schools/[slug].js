import React, { useMemo } from 'react';
import Head from 'next/head';

import { graphcms } from '../../config';
import { GET_SCHOOLS, GET_CONTACTS } from '../../queries';
import Layout from '../../components/ui/Layout';
import SchoolList from '../../components/Schools/SchoolList';

import { generateList, getAlpha3, generateLink_list } from '../../constants/schoolPageHelper';

export async function getStaticProps({ params }) {
    const { schools } = await graphcms.request(GET_SCHOOLS);
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            schools,
            contacts,
            slug: params?.slug,
        },
    };
}

export async function getStaticPaths() {
    const { schools } = await graphcms.request(GET_SCHOOLS);
    const countries = [...new Set(generateList(schools, 'Secondary school')?.filter(Boolean))] ?? [];
    const links = generateLink_list(countries);

    return {
        paths: links.map((slug) => {
            return {
                params: { slug },
            };
        }),
        fallback: false,
    };
}

const InstitutionsCountries = ({ schools, contacts, slug }) => {
    const [pageAlpha3, pageName] = getAlpha3(slug);

    const parsedSchools = schools?.filter((el) => el?.country === pageAlpha3 && el?.isSecondarySchool);

    return (
        <React.Fragment>
            <Head>
                <title>SolidLinkCo | Institutions - {pageName}</title>
                <meta name="description" content={`SolidLinkCo partners in ${pageName}`} />
            </Head>
            <Layout contacts={contacts}>
                <SchoolList
                    schools={parsedSchools}
                    title={'Secondary school'}
                    pageAlpha3={pageAlpha3}
                    pageName={pageName}
                />
            </Layout>
        </React.Fragment>
    );
};
export default InstitutionsCountries;
