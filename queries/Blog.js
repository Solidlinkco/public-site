import { gql } from 'graphql-request';

const GET_BLOGS = gql`
    query blogs {
        blogs(stage: PUBLISHED, orderBy: publishedAt_DESC) {
            title
            image {
                url(transformation: { image: { resize: { width: 500 } } })
            }
            imageAltAttribute
            content {
                text
            }
            blogSlug
            publishedAt
            customContent
            customDate
        }
    }
`;

const GET_BLOG = gql`
    query blogs($blogSlug: String) {
        blog(where: { blogSlug: $blogSlug }) {
            title
            image {
                url(transformation: { image: { resize: { width: 500 } } })
            }
            content {
                html
            }
            publishedAt
            customContent
            customDate
        }
    }
`;

export { GET_BLOGS, GET_BLOG };
