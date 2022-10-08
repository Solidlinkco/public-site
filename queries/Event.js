import { gql } from 'graphql-request';

const GET_EVENTS = gql`
    query events {
        events(stage: PUBLISHED, orderBy: dateAndTime_DESC) {
            title
            eventSlug
            dateAndTime
            description
            image {
                url(transformation: { image: { resize: { width: 200 } } })
            }
            imageAltAttribute
        }
    }
`;

export { GET_EVENTS };
