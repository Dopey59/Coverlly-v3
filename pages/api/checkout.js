import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    const { items, recipient } = req.body;
    console.log("Articles reçus :", items);
    console.log("Destinataire :", recipient);

    if (!items || items.length === 0) {
      throw new Error("Aucun article fourni.");
    }

    // Étape 1 : Appel à l'API Printful pour obtenir les frais de livraison
    const shippingRatesResponse = await fetch("https://api.printful.com/shipping/rates", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipient,
        items: items.map((item) => ({
          variant_id: parseInt(item.variant_id), // Assurez-vous que le champ est correct
          quantity: item.quantity,
        })),
      }),
    });

    if (!shippingRatesResponse.ok) {
      const errorData = await shippingRatesResponse.json();
      console.error("Erreur Printful :", errorData);
      throw new Error(errorData.error.message || "Erreur lors de la récupération des frais de livraison.");
    }

    const shippingRates = await shippingRatesResponse.json();
    console.log("Frais de livraison Printful :", shippingRates);

    // Étape 2 : Configurer les options de livraison pour Stripe
    const shippingOptions = shippingRates.result.map((rate) => ({
      shipping_rate_data: {
        type: "fixed_amount",
        fixed_amount: {
          amount: Math.round(rate.rate * 100), // Convertir le prix en centimes
          currency: rate.currency,
        },
        display_name: rate.name, // Nom de l'option de livraison
        delivery_estimate: {
          minimum: { unit: "business_day", value: rate.minDeliveryDays },
          maximum: { unit: "business_day", value: rate.maxDeliveryDays },
        },
      },
    }));
    

    // Étape 3 : Création des articles pour Stripe
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.image],
        },
        unit_amount: Math.round(item.price * 100),
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
        maximum: 10,
      },
      quantity: item.quantity,
    }));
    const EUROPEAN_COUNTRIES = [
      "AT", // Autriche
      "BE", // Belgique
      "BG", // Bulgarie
      "CY", // Chypre
      "CZ", // République tchèque
      "DE", // Allemagne
      "DK", // Danemark
      "EE", // Estonie
      "ES", // Espagne
      "FI", // Finlande
      "FR", // France
      "GR", // Grèce
      "HR", // Croatie
      "HU", // Hongrie
      "IE", // Irlande
      "IT", // Italie
      "LT", // Lituanie
      "LU", // Luxembourg
      "LV", // Lettonie
      "MT", // Malte
      "NL", // Pays-Bas
      "PL", // Pologne
      "PT", // Portugal
      "RO", // Roumanie
      "SE", // Suède
      "SI", // Slovénie
      "SK", // Slovaquie
    ];
    
    // Étape 4 : Création de la session Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: EUROPEAN_COUNTRIES, // Pays autorisés
      },  
      allow_promotion_codes : true,
      shipping_options: shippingOptions,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    console.log("Session Stripe créée :", session.id);
    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("Erreur dans /api/checkout :", error.message);
    res.status(500).json({ error: error.message });
  }
}