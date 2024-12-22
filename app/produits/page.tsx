"use client";
import { useState, useEffect, useCallback } from "react";
import { getProducts } from "../lib/getProducts";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
  price?: number;
}

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");
  const limit = 20;

  // Fonction pour charger les produits, mémorisée avec useCallback
  const loadProducts = useCallback(async () => {
    if (loading || !hasMore) return;
  
    setLoading(true);
    setError("");
  
    try {
      const newProducts: Product[] = await getProducts(offset, limit);
  
      // Ajouter uniquement des produits avec des IDs uniques
      setProducts((prev) => {
        const allProducts = [...prev, ...newProducts];
        const uniqueProducts = Array.from(new Set(allProducts.map((p) => p.id)))
          .map((id) => allProducts.find((p) => p.id === id));
        return uniqueProducts as Product[];
      });
  
      // Vérifier si tous les produits sont chargés
      if (newProducts.length < limit) {
        setHasMore(false);
      } else {
        setOffset((prev) => prev + limit);
      }
    } catch (error: unknown) {
      console.error("Erreur lors du chargement des produits :", error);
      setError(
        (error as Error)?.message || "Une erreur est survenue lors du chargement des produits. Veuillez réessayer."
      );
    } finally {
      setLoading(false);
    }
  }, [offset, limit, loading, hasMore]);
  

  // Chargement initial des produits
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="p-3 md:p-10 ">
      <div className="md:grid-cols-4 grid grid-cols-2 gap-4 my-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            <div className="relative flex flex-col items-center justify-center">
              <Link href={`/produits/${product.id}`} passHref>
                <Image
                  loading="lazy"
                  src={product.thumbnail_url || "/placeholder.png"}
                  alt={product.name || "Produit"}
                  width={500}
                  height={500}
                />
                <div className="flex flex-col gap-2 items-center mt-2">
                  <h2 className="uppercase font-bold text-center text-lg">{product.name}</h2>
                  <span className="text-gray-700 text-md">{product.price ? `${product.price.toFixed(2)}€` : "29,99€"}</span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bouton Charger plus */}
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadProducts}
            disabled={loading || !hasMore}
            aria-busy={loading}
            aria-label="Charger plus de produits"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Charger plus"
            )}
          </button>
        </div>
      )}
      {!hasMore && (
        <div className="text-center mt-6 text-gray-500">
          Tous les produits ont été chargés.
        </div>
      )}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
    </div>
  );
};

export default ProductsList;
