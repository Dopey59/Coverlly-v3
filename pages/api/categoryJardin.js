export const fetchSelectedProducts = async (productIds) => {
  if (!Array.isArray(productIds) || productIds.length === 0) {
    console.error("Invalid productIds:", productIds);
    return [];
  }

  try {
    const promises = productIds.map(async (id) => {
      try {
        const res = await fetch(`https://api.printful.com/store/products/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          },
        });

        if (!res.ok) {
          console.warn(`Failed to fetch product ${id}: ${res.statusText}`);
          return null;
        }

        const data = await res.json();
        return data;
      } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        return null;
      }
    });

    const results = await Promise.all(promises);

    // Filtrer et mapper les résultats valides
    const validProducts = results
      .filter((result) => result && result.code === 200 && result.result)
      .map((result) => result.result);

    // Log pour vérifier les résultats en développement
    if (process.env.NODE_ENV !== "production") {
      console.log("Fetched valid products:", validProducts);
    }

    return validProducts;
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return [];
  }
};