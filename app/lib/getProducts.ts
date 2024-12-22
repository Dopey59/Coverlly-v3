export const getProducts = async (offset: number = 0, limit: number = 20) => {
  // Vérification du token
  const token = process.env.API_TOKEN;
  if (!token) {
    throw new Error("API token is not defined in the environment variables.");
  }

  // Base URL dynamique en fonction de l'environnement
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://api.printful.com/store/products" // URL directe pour la production
      : "http://localhost:3000/api/proxy"; // Proxy local pour le développement

  // Validation des paramètres offset et limit
  if (typeof offset !== "number" || typeof limit !== "number") {
    throw new Error("Offset and limit must be numbers.");
  }

  // Construire l'URL complète avec les paramètres
  const url = `${baseUrl}?offset=${offset}&limit=${limit}`;

  // Log en développement pour le débogage
  if (process.env.NODE_ENV !== "production") {
    console.log("Fetching products with URL:", url);
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Gestion des erreurs de réponse
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(
        `Failed to fetch products: ${res.statusText}. Details: ${errorText}`
      );
    }

    // Retour des données au format JSON
    return await res.json();
  } catch (error) {
    // Log des erreurs en développement
    if (process.env.NODE_ENV !== "production") {
      console.error("Error fetching products:", error);
    }
    throw error; // Relance l'erreur pour la remonter
  }
};
