const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const values = req.body;

    const msg = {
        to: 'remi.kolawole@solidlinkco.com',
        cc: values.customerEmail,
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
