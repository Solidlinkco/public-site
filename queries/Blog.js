import { gql } from "graphql-request";

const GET_BLOGS = gql`
    query blogs {
        blogs(stage: PUBLISHED, orderBy: publishedAt_DESC) {
            title
            image {
                url(transformation: { image: { resize: { width: 500 } } })
            }
            content {
                text
            }
        }
    }
`;

const GET_BLOG = gql`
    query blogs($id: ID) {
        blogs(where: { id: $id }) {
            title
            image {
                url(transformation: { image: { resize: { width: 500 } } })
            }
            content {
                html
            }
        }
    }
`;

export { GET_BLOGS, GET_BLOG };
