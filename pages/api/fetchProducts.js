export default async function handler(req, res) {
  console.log("Requête reçue : ", req.method); // Vérifier la méthode HTTP

  if (req.method === "POST") {
    const { productIds } = req.body; // Liste des IDs de produits
    console.log("IDs de produits demandés : ", productIds);

    const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;
    console.log("Clé API récupérée ? ", !!apiToken);

    try {
      const promises = productIds.map((id) => {
        console.log(`Envoi de la requête pour l'ID ${id}...`);
        return fetch(`https://api.printful.com/store/products/${id}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }).then((res) => res.json());
      });

      const results = await Promise.all(promises);

      console.log("Résultats des requêtes : ", results); // Log complet des résultats

      const validProducts = results
        .filter((result) => result.code === 200)
        .map((result) => result.result);

      console.log("Produits valides : ", validProducts);
      return res.status(200).json(validProducts);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      return res.status(500).json({ error: "Erreur lors de l'appel à l'API externe" });
    }
  } else {
    console.log("Méthode HTTP non autorisée :", req.method);
    return res.status(405).json({ error: "Méthode non autorisée" });
  }
}