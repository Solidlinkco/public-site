const axios = require('axios');

const ENDPOINT = 'https://api.sendgrid.com/v3/mail/send';
const config = {
    headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json',
    },
};

export default async (req, res) => {
    const values = req.body;
    try {
        const toSolidLink = await axios.post(
            ENDPOINT,
            JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: 'farouqbabcock@gmail.com', name: 'Solid link' }],
                        dynamic_template_data: values,
                    },
                ],
                from: { email: 'farouq.ayofe@whenthen.com', name: 'Solid-link' },

                template_id: 'd-f5420f301203488d9be7e85692957a9f',
            }),
            config
        );
        res.status(200).json({ ok: true });
    } catch (e) {
        res.status(200).json({ ok: false });
    }
};
