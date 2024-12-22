import crypto from 'crypto';
import getRawBody from 'raw-body';

export const config = {
  api: {
    bodyParser: false, // Désactiver le parsing automatique
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const secret = process.env.API_TOKEN;
    const signature = req.headers['x-printful-signature'];

    if (!signature) {
      console.error('Signature manquante dans les en-têtes');
      return res.status(400).json({ message: 'Signature manquante' });
    }

    const rawBody = await getRawBody(req);

    // Calcul du hash
    const hash = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
    if (signature !== hash) {
      console.error('Signature invalide');
      console.error('Signature attendue:', hash);
      console.error('Signature reçue:', signature);
      return res.status(401).json({ message: 'Signature invalide' });
    }

    let payload;
    try {
      payload = JSON.parse(rawBody);
    } catch (err) {
      console.error('Erreur de parsing JSON:', err);
      return res.status(400).json({ message: 'Payload invalide' });
    }

    console.log('Webhook reçu:', payload);

    // Gestion des événements
    switch (payload.type) {
      case 'order_created':
        console.log(`[Webhook] Nouvelle commande créée : ${payload.data.order_id}`);
        break;
      case 'package_shipped':
        console.log(`[Webhook] Colis expédié : ${payload.data.tracking_number}`);
        break;
      case 'order_failed':
        console.error(`[Webhook] Commande échouée : ${payload.data.error_message}`);
        break;
      default:
        console.warn(`[Webhook] Événement non géré : ${payload.type}`);
    }

    return res.status(200).json({ message: 'Webhook traité avec succès' });
  } catch (error) {
    console.error('Erreur Webhook:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}
