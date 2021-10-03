import React from 'react';
import Head from 'next/head';
import format from 'date-fns/format';
import { enGB } from 'date-fns/locale';
import { graphcms } from '../../config';
import { GET_BLOGS, GET_BLOG, GET_CONTACTS } from '../../queries';
import BlogTemplate from '../../components/Blogs/BlogTemplate';
import Layout from '../../components/ui/Layout';

export async function getStaticProps({ params }) {
    const { blog } = await graphcms.request(GET_BLOG, {
        blogSlug: params.slug,
    });
    const { contacts } = await graphcms.request(GET_CONTACTS);

    return {
        props: {
            data: blog,
            contacts,
        },
    };
}

export async function getStaticPaths() {
    const { blogs } = await graphcms.request(GET_BLOGS);

    return {
        paths: blogs.map(({ blogSlug }) => {
            return {
                params: { slug: blogSlug },
            };
        }),
        fallback: false,
    };
}

const JobDetails = ({ data, contacts }) => {
    const parsedDate = format(new Date(data.publishedAt), 'dd/MM/yyyy', {
        locale: enGB,
    });

    return (
        <React.Fragment>
            <Head>
                <title>SolidLinkCo | Blog - {data.title}</title>
                <meta name="description" content={data.title} />
            </Head>
            <Layout contacts={contacts}>
                <BlogTemplate
                    html={data?.content?.html}
                    title={data.title}
                    image={data?.image?.url}
                    date={parsedDate}
                />
            </Layout>
        </React.Fragment>
    );
};
export default JobDetails;
