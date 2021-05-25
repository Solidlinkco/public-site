module.exports = {
    images: {
        domains: ["media.graphcms.com"],
    },
    env: {
        // graphcms: process.env.REACT_APP_GRAPH_CMS,
    },
    target: "serverless",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ["@svgr/webpack"],
        });

        return config;
    },
};
