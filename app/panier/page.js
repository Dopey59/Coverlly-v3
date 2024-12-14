"use client";
import { getCart, removeFromCart, clearCart } from "../utils/cart";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Panier() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Charge les articles du panier au montage du composant
    const updateCart = () => setCart(getCart());
    updateCart();

    // Permet de réagir aux modifications dans localStorage
    window.addEventListener("storage", updateCart);
    return () => window.removeEventListener("storage", updateCart);
  }, []);

  const handleRemove = (variant_id, size) => {
    removeFromCart(variant_id, size);
    setCart(getCart());
  };

  const handleClearCart = () => {
    clearCart();
    setCart([]);
  };

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cart }),
      });

      const { id } = await res.json();
      if (!id) {
        throw new Error("Erreur lors de la création de la session Stripe.");
      }

      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Erreur lors de la redirection vers Stripe:", error.message);
    }
  };

  if (cart.length === 0) {
    return <p>Votre panier est vide</p>;
  }

  return (
    <div className="h-screen w-full">
      <div className="h-screen flex justify-center flex-col items-center">
        <h1 className="uppercase font-medium text-3xl">Votre panier</h1>
        <ul  className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {cart.map((item, index) => (
            <li key={item.id} className="flex flex-col items-center justify-center gap-3" key={`${item.variant_id}-${item.size}-${index}`}>
              <Image height={150} width={150} src={item.image} alt={item.name} />
              <h1 className="uppercase font-medium text-2xl">{item.name}</h1>
              <p>Taille : {item.size}</p>
              <p>Prix : {item.price}€</p>
              <p>Quantité : {item.quantity}</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleRemove(item.variant_id, item.size)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row py-4 gap-6 w-full max-w-screen-md">
          <button
            className="bg-black text-white w-full font-medium p-2 hover:bg-blue-500 transition rounded"
            onClick={handleCheckout}
          >
            Acheter
          </button>
          <button
            className="border-black text-black w-full font-medium p-2 hover:bg-red-500 hover:text-white transition rounded"
            onClick={handleClearCart}
          >
            Vider le panier
          </button>
        </div>
      </div>
    </div>
  );
}