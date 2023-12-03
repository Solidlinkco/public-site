import { gql } from 'graphql-request';

const GET_CONTACTS = gql`
    query contacts {
        contacts(stage: PUBLISHED) {
            value
            type
        }
    }
`;

export { GET_CONTACTS };
