import { gql } from 'graphql-request';

const GET_SCHOOLS = gql`
    query getSchools {
        schools {
            name
            logo {
                url
            }
            country
            isSecondarySchool
        }
    }
`;

export { GET_SCHOOLS };
