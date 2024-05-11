const WEBHOOK_URL = "https://discord.com/api/webhooks/1238984021552271503/6H6Mv3R8xCw1IidzC7aEbtlgC9eakK7AkNfrkhr8DuQrYPf0Bd4yA1l78v-3yi0zv9in";
export const pingDiscordAsync = async (msg) => {
    const payload = {
      username: 'Solidlink Consultation Form',
      avatar_url: 'https://solidlinkco.com/favicon.ico',
      content: msg,
    };
  
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });
   
    } catch (err) { 
        // ignore
    }
  };
  