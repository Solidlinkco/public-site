import { gql } from 'graphql-request';

const GET_SERVICES_PAGE = gql`
    query events {
        servicesCards(stage: PUBLISHED) {
            id
            title
            description
            order
        }
    }
`;

export { GET_SERVICES_PAGE };
