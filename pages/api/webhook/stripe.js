import { buffer } from "micro";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Méthode non autorisée");

  const sig = req.headers["stripe-signature"];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
  } catch (err) {
    console.error("Erreur webhook Stripe :", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Appeler l'API Printful pour créer la commande
    try {
      const printfulRes = await fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recipient: session.shipping_details,
          items: session.display_items.map((item) => ({
            variant_id: item.custom_fields.variant_id,
            quantity: item.quantity,
          })),
        }),
      });

      if (!printfulRes.ok) {
        console.error("Erreur création commande Printful :", await printfulRes.json());
      }
    } catch (err) {
      console.error("Erreur lors de l'envoi à Printful :", err.message);
    }
  }

  res.json({ received: true });
}