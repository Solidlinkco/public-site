import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.REACT_APP_CMS_ENDPOINT;

const graphcms = new GraphQLClient(endpoint, {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_CMS_TOKEN}`,
    },
});

export default graphcms;
