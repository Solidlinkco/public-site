module.exports = {
    images: {
        domains: ["media.graphcms.com"],
    },
    env: {
        calendly: process.env.REACT_APP_CALENDLY_TOKEN,
    },
    target: "serverless",
};
