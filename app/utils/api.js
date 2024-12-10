// utils/api.js
export const fetchProductVariants = async (productId) => {
    const response = await fetch(`https://api.printful.com/store/products/${productId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des variantes du produit");
    }
  
    const data = await response.json();
    return data.result.sync_variants; // Retourne les variantes du produit
  };
  