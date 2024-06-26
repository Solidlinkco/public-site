import { gql } from 'graphql-request';

const GET_HOMEPAGE = gql`
    query homepage {
        homepages(stage: PUBLISHED) {
            heroImage {
                url(transformation: { image: { resize: { height: 350 } } })
            }
        }
        reviews(stage: PUBLISHED) {
            author
            reviewContent
            authorPicture {
                url(transformation: { image: { resize: { width: 30 } } })
            }
        }
        servicesCards(stage: PUBLISHED) {
            id
            title
            description
            order
            ctaUrl
        }
        blogs(stage: PUBLISHED, orderBy: publishedAt_DESC) {
            title
            image {
                url(transformation: { image: { resize: { width: 500 } } })
            }
            content {
                text
            }
            blogSlug
            publishedAt
        }
        events(stage: PUBLISHED, orderBy: dateAndTime_DESC) {
            title
            eventSlug
            dateAndTime
            description
            image {
                url(transformation: { image: { resize: { width: 200 } } })
            }
        }
    }
`;

export { GET_HOMEPAGE };
