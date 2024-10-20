import { act } from "react";

const VERIFY_URL="https://www.google.com/recaptcha/api/siteverify";
const SECRET=process.env.RECAPTCHA_SECRET;

export default async (req, res) => {
    // const {token} = JSON.parse();
    console.log(req.body)
 
    try {
         const response = await fetch(`${VERIFY_URL}?secret=${SECRET}&response=${req.body}`, {
            method: "POST", 
         });

         const body = await response.json();

         if(body.success || score > 0.1) {
            res.status(200).json({
                ok: true,
            });
         } else {
            res.status(200).json({
                ok: false,
                message: 'Captcha failed'
            });
         }


        res.status(200).json(body);
    } catch (e) {
        await pingDiscordAsync(JSON.stringify({ message: 'Captcha failed', error: e }, null, 2));
        res.status(500).json({ ok: false, e });
    }
};
