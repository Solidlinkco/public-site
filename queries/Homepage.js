import { gql } from "graphql-request";

const GET_HOMEPAGE = gql`
    query homepage {
        homepages(stage: PUBLISHED) {
            heroImage {
                url(transformation: { image: { resize: { height: 350 } } })
            }
        }
    }
`;

export { GET_HOMEPAGE };
