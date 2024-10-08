import { createClient } from '@supabase/supabase-js';
import {pingDiscordAsync} from "../../components/consultation-form/Form/ping-discord";

export const supabase = createClient(process.env.SUPABASE_URL || '', process.env.SUPABASE_KEY || '', {
    auth: {
      persistSession: false,
    },
  });
  
 
export default async (req, res) => {
    const {email} = JSON.parse(req.body);
 
    try {
         await supabase.from('newsletter').upsert({
        email: email
       }, {
        onConflict: "email"
       }); 


        res.status(200).json({ ok: true });
    } catch (e) {
        await pingDiscordAsync(JSON.stringify({ message: 'Failed to send email to SUPABASE', error: e }, null, 2));
        res.status(200).json({ ok: false, e });
    }
};
