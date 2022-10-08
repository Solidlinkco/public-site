import { gql } from 'graphql-request';

const GET_SCHOOLS = gql`
    query getSchools {
        schools {
            name
            logo {
                url
                fileName
            }
            country
            isSecondarySchool
            logoAltAttribute
        }
    }
`;

export { GET_SCHOOLS };
