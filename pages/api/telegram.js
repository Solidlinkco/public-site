// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const TelegramBot = require("node-telegram-bot-api");

const token = "1827560082:AAGb5Ru5guKRsXIQBDB05oca0D3qi8rIMSo";
const bot = new TelegramBot(token, { polling: false });

export default async (req, res) => {
    const res_ = await bot.sendMessage("@fdev-test-channel", "Received your message:");
    console.log("🚀 ~ file: telegram.js ~ line 10 ~ res", res_);
    res.status(200).json({ name: "John Doe" });
};
