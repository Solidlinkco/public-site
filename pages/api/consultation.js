const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Lz = require('lz-string');

const ORG_EMAIL = 'remi.kolawole@solidlinkco.com';

export default async (req, res) => {
    const body = req.body;

    const decompressed = Lz.decompress(body.compressed);
    const values = JSON.parse(decompressed);

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
        res.status(200).json({ ok: false, e });
    }
};
