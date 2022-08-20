import { gql } from 'graphql-request';

const GET_SERVICES_PAGE = gql`
    query events {
        servicesCards(stage: PUBLISHED) {
            id
            title
            description
            order
            ctaUrl
        }
    }
`;

export { GET_SERVICES_PAGE };
