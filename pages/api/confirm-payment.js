import axios from 'axios';
import {pingDiscordAsync} from "../../components/consultation-form/Form/ping-discord"

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
        await pingDiscordAsync(JSON.stringify({ message: 'Failed to verify payment', error: e }, null, 2));
        res.status(200).json({ ok: false });
    }
};
