import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { items } = req.body; // On récupère uniquement les articles ici

  try {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'eur', // Monnaie utilisée
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100), // Prix en centimes
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Méthodes de paiement
      mode: 'payment',
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'US'], // Permet de collecter les adresses
      },
      line_items: lineItems,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
