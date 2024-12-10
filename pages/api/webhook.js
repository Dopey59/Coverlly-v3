import { buffer } from "micro";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // Désactiver l'analyseur pour utiliser le raw body
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15", // Assurez-vous d'utiliser la bonne version
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Méthode non autorisée");
    return;
  }

  try {
    const rawBody = await buffer(req);
    const signature = req.headers["stripe-signature"];

    // Vérifiez le webhook Stripe
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody.toString(),
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Erreur de signature Stripe :", err.message);
      res.status(400).send(`Erreur de signature Stripe : ${err.message}`);
      return;
    }

    // Gérer le webhook
    console.log("Événement reçu :", event);

    res.status(200).json({ received: true });
  } catch (error) {
    console.error("Erreur lors du traitement du webhook :", error.message);
    res.status(500).send("Erreur lors du traitement du webhook");
  }
}
