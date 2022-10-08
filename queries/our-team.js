import { gql } from 'graphql-request';

const GET_TEAM = gql`
    query getOurTeam {
        ourTeams {
            heroImage {
                id
                fileName
                url
            }
            teamMembers {
                fullName
                id
                position
                bio
                image {
                    id
                    fileName
                    url
                }
            }
            ourFounders {
                image {
                    id
                    fileName
                    url
                }
                content {
                    html
                }
                imageAltAttribute
            }
        }
    }
`;

export { GET_TEAM };
