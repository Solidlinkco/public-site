import axios from 'axios';

export default async (req, res) => {
    const values = req.body;

    try {
        const result = await axios.get(`https://api.paystack.co/transaction/verify/${values.data.reference}`, {
            headers: {
                Authorization: `Bearer ${process.env.paystackSecretKey}`,
            },
        });

        res.status(200).json({ ok: true, result: result.data });
    } catch (e) {
        res.status(200).json({ ok: false });
    }
};
