module.exports = {
    images: {
        domains: ["media.graphcms.com"],
    },
    env: {
        calendlyUrl: process.env.REACT_APP_CALENDLY_URL,
        calendlyToken: process.env.REACT_APP_CALENDLY_TOKEN,
        telegramBot: process.env.REACT_APP_TELEGRAM_BOT,
        telegramChannel: process.env.REACT_APP_CHANNEL,
    },
    target: "serverless",
};
