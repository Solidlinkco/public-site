import { gql } from 'graphql-request';

const GET_OUR_STORY = gql`
    query getOurStory {
        ourStories {
            heroImage {
                fileName
                url
            }
            ourStory {
                html
            }
            didYouKnow {
                html
            }
            gallery {
                id
                fileName
                url
            }
        }
    }
`;

export { GET_OUR_STORY };
