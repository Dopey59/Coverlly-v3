// utils/cart.js
import { fetchProductVariants } from "./api";

export const createItemsWithVariants = async (productId, quantity, selectedSize) => {
  try {
    const variants = await fetchProductVariants(productId); // Récupérer les variantes
    if (!variants || variants.length === 0) {
      throw new Error("Aucune variante disponible pour ce produit");
    }

    // Trouver la variante correspondant à la taille sélectionnée
    const selectedVariant = variants.find((v) => v.size === selectedSize);
    if (!selectedVariant) {
      throw new Error("Aucune variante trouvée pour la taille sélectionnée");
    }

    return {
      name: selectedVariant.name,
      description: `${selectedVariant.name} (${selectedVariant.size})`,
      image: selectedVariant.files[0]?.url, // Image associée à la variante
      price: selectedVariant.retail_price, // Prix
      quantity,
      variant_id: selectedVariant.id, // ID de la variante
    };
  } catch (error) {
    console.error("Erreur lors de la création des items :", error.message);
    throw error;
  }
};
