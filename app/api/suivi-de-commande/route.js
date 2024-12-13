import { NextResponse } from "next/server";

export async function POST(req) {
  const { orderId } = await req.json();
  const API_TOKEN = process.env.API_TOKEN;

  try {
    if (!orderId || typeof orderId !== "string") {
      return NextResponse.json({ error: "Numéro de commande invalide." }, { status: 400 });
    }

    console.log("Order ID reçu :", orderId);

    const response = await fetch(`https://api.printful.com/orders/${orderId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });

    const responseText = await response.text();
    console.log("Réponse brute Printful :", responseText);

    if (!response.ok) {
      const errorData = JSON.parse(responseText);
      if (response.status === 404) {
        return NextResponse.json({ error: "Commande introuvable. Vérifiez le numéro saisi." }, { status: 404 });
      }
      throw new Error(`Erreur Printful : ${JSON.stringify(errorData)}`);
    }

    const { result } = JSON.parse(responseText);
    return NextResponse.json({
      id: result.id,
      status: result.status,
      carrier: result.shipments[0]?.carrier || "Non disponible",
      tracking_number: result.shipments[0]?.tracking_number || "Non disponible",
      tracking_url: result.shipments[0]?.tracking_url || "#",
    });
  } catch (error) {
    console.error("Erreur backend :", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}