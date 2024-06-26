const sgMail = require('@sendgrid/mail');
import {pingDiscordAsync} from "../../components/consultation-form/Form/ping-discord"
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const ORG_EMAIL = 'remi.kolawole@solidlinkco.com';

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '20mb',
        },
    },
};

export default async (req, res) => {
    const values = req.body;

    const msg = {
        to: ORG_EMAIL,
        ...(values.customerEmail !== ORG_EMAIL && { cc: values.customerEmail }),
        from: 'admin@solidlinkco.com',
        subject: 'Consultation Form',
        text: values.mailContent,
        attachments: values.attachments,
    };
    try {
       await sgMail.send(msg);  
        res.status(200).json({ ok: true });
    } catch (e) {
        await pingDiscordAsync(JSON.stringify({ message: 'Failed to send email', error: e }, null, 2));
        res.status(200).json({ ok: false, e });
    }
};
