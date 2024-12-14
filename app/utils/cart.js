"use client";
import { fetchProductVariants } from "./api";

// Ajouter un article au panier
export const addToCart = (item) => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex(
      (i) => i.variant_id === item.variant_id && i.size === item.size
    );

    if (existingItemIndex !== -1) {
      // Met à jour la quantité si l'article existe déjà
      cart[existingItemIndex].quantity += item.quantity;
    } else {
      // Ajoute un nouvel article au panier
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error("Erreur lors de l'ajout au panier :", error.message);
  }
};

// Récupérer tous les articles du panier
export const getCart = () => {
  try {
    return JSON.parse(localStorage.getItem("cart")) || [];
  } catch (error) {
    console.error("Erreur lors de la récupération du panier :", error.message);
    return [];
  }
};

// Supprimer un article spécifique du panier
export const removeFromCart = (variant_id, size) => {
  try {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter(
      (item) => !(item.variant_id === variant_id && item.size === size)
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article :", error.message);
  }
};

// Vider complètement le panier
export const clearCart = () => {
  try {
    localStorage.removeItem("cart");
  } catch (error) {
    console.error("Erreur lors de la suppression du panier :", error.message);
  }
};

// Créer un article avec ses variantes pour l'ajouter au panier
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
      image: selectedVariant.files[0]?.url || "", // Image associée à la variante
      price: parseFloat(selectedVariant.retail_price || 0), // Prix
      quantity,
      size: selectedSize, // Taille
      variant_id: selectedVariant.id, // ID de la variante
    };
  } catch (error) {
    console.error("Erreur lors de la création des items :", error.message);
    throw error;
  }
};