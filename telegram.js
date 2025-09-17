const TOKEN = "8483832719:AAH9MrWjVVmMxydfTMJjOPyG_c7xu04P6Gk";
const CHAT_ID = "5923031825";

export const sendToTelegram = async (text) => {
  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text: text,
    parse_mode: 'HTML'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Telegram API error: ${errorData.description}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};