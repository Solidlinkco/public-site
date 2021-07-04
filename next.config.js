module.exports = {
    images: {
        domains: ["media.graphcms.com"],
    },
    env: {
        calendlyUrl: process.env.REACT_APP_CALENDLY_URL,
        calendlyToken: process.env.REACT_APP_CALENDLY_TOKEN,
        telegramBot: process.env.REACT_APP_TELEGRAM_BOT,
        telegramChannel: process.env.REACT_APP_CHANNEL,
        youTubeAPIKey: process.env.REACT_APP_YOUTUBE_API_KEY,
        youtubeChannelID: process.env.YOUTUBE_CHANNEL_ID,
        instaToken: process.env.INSTA_TOKEN,
    },
    target: "serverless",
};
