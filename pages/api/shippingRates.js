import fetch from 'node-fetch';

export default async (req, res) => {
  const { recipient, items } = req.body;

  const shippingRatesResponse = await fetch("https://api.printful.com/shipping/rates", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      recipient,
      items: items.map((item) => ({
        variant_id: parseInt(item.variant_id),
        quantity: item.quantity,
      })),
    }),
  });

  if (!shippingRatesResponse.ok) {
    const errorData = await shippingRatesResponse.json();
    console.error("Erreur Printful :", errorData);
    return res.status(500).json({ error: errorData.error.message || "Erreur lors de la récupération des frais de livraison." });
  }

  const shippingRates = await shippingRatesResponse.json();
  const deliveryEstimates = shippingRates.result.map((rate) => ({
    name: rate.name,
    minDeliveryDays: rate.minDeliveryDays,
    maxDeliveryDays: rate.maxDeliveryDays,
  }));

  res.status(200).json(deliveryEstimates);
};