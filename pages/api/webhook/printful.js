import crypto from 'crypto';

export default async function handler(req, res) {
    const secret = process.env.API_TOKEN;
    const signature = req.headers['x-printful-signature'];

    const hash = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(req.body))
    .digest('hex');

if (signature !== hash) {
  return res.status(401).json({ message: 'Signature invalide' });
}

    if (req.method === 'POST') {
      try {
        // 1. Récupérer les données du webhook
        const payload = req.body;
  
        // Implémentez ici une vérification selon votre clé secrète
  
        console.log('Webhook reçu:', payload);
  
        // 3. Traiter les données reçues (ex: mettre à jour votre base de données)
        if (payload.type === 'package_shipped') {
          console.log('Colis expédié:', payload);
          // Mettez à jour votre base de données ou envoyez un email
        }
  
        // 4. Répondre à Printful
        return res.status(200).json({ message: 'Webhook reçu avec succès' });
      } catch (error) {
        console.error('Erreur Webhook:', error);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
    } else {
      return res.status(405).json({ message: 'Méthode non autorisée' });
    }
  }
  