import fetch from 'node-fetch';
import 'dotenv/config';

async function createWebhook() {
  const secret = process.env.API_TOKEN;
  const response = await fetch('https://api.printful.com/webhooks', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: 'https://www.coverlly.fr/api/webhook/printful',
      types: ['order_created', 'package_shipped'],
      params: { secret },
    }),
  });

  const data = await response.json();
  console.log(data);
}

createWebhook().catch((err) => console.error('Erreur lors de la création du webhook :', err));