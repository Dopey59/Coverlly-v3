export default async function handler(req, res) {
  // Vérifiez la méthode HTTP
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { productIds } = req.body;

  // Validation des entrées
  if (!productIds || !Array.isArray(productIds) || productIds.length === 0) {
    return res.status(400).json({ error: "La liste des IDs de produits est invalide ou vide." });
  }

  const apiToken = process.env.API_TOKEN;

  // Vérifiez que le token est disponible
  if (!apiToken) {
    return res.status(500).json({ error: "Clé API manquante sur le serveur." });
  }

  try {
    // Limitez le nombre de requêtes simultanées (par exemple, à 10)
    const MAX_CONCURRENT_REQUESTS = 10;

    const fetchProduct = async (id) => {
      try {
        const response = await fetch(`https://api.printful.com/store/products/${id}`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        // Vérifiez si la réponse est réussie
        if (!response.ok) {
          console.error(`Erreur API pour l'ID ${id}: ${response.statusText}`);
          return null;
        }

        const result = await response.json();
        return result.result; // Retournez uniquement la partie pertinente
      } catch (error) {
        console.error(`Erreur réseau pour l'ID ${id}:`, error.message);
        return null;
      }
    };

    // Limitez le parallélisme des requêtes
    const results = [];
    for (let i = 0; i < productIds.length; i += MAX_CONCURRENT_REQUESTS) {
      const chunk = productIds.slice(i, i + MAX_CONCURRENT_REQUESTS);
      const chunkResults = await Promise.all(chunk.map(fetchProduct));
      results.push(...chunkResults);
    }

    // Filtrez les produits valides
    const validProducts = results.filter((product) => product !== null);

    // Répondez avec les produits valides
    return res.status(200).json(validProducts);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error.message);
    return res.status(500).json({ error: "Erreur interne du serveur." });
  }
}