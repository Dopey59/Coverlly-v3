import { getProducts } from "../lib/getProducts";
import Image from 'next/image';
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue de produits - Coverly",
  description: "Page de la liste de tous les produits répertoriés sur le site Coverlly",
};

interface Product {
  id: number;
  name: string;
  thumbnail_url: string;
  price?: number; // Ajustez selon vos besoins
}

async function fetchAllProducts(): Promise<Product[]> {
  const limit = 20; // Nombre de produits par page
  let offset = 0;
  let allProducts: Product[] = [];
  let hasMore = true;

  while (hasMore) {
    try {
      // Appeler getProducts avec offset et limit
      const productsBatch = await getProducts(offset, limit);

      if (!Array.isArray(productsBatch) || productsBatch.length === 0) {
        hasMore = false; // Arrêtez la boucle si aucune donnée supplémentaire
      } else {
        allProducts = [...allProducts, ...productsBatch];
        offset += limit; // Augmentez l'offset pour la prochaine requête
        hasMore = productsBatch.length === limit; // Continue si on atteint la limite
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
      hasMore = false; // Arrêtez la boucle en cas d'erreur
    }
  }

  console.log(allProducts)
  return allProducts;
}

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    products = await fetchAllProducts(); // Récupérez tous les produits
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
  }

  // Vérifiez que les produits sont bien un tableau
  if (!Array.isArray(products) || products.length === 0) {
    return <p>Les produits ne sont pas disponibles pour le moment.</p>;
  }

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* Header Présentation */}
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center text-white anim-product h-80 w-full">
          <h1 className="uppercase font-black md:text-6xl text-3xl mt-14">Catalogue</h1>
        </div>

        {/* Affichage des produits */}
        <div className="p-3 md:p-10">
          <div className="md:grid-cols-4 grid grid-cols-2 gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                <div className="relative flex flex-col items-center justify-center">
                  <Link href={`/produits/${product.id}`}>
                    <Image
                      loading="lazy"
                      src={product.thumbnail_url}
                      alt={product.name}
                      width={500}
                      height={500}
                    />
                    <div className="flex flex-col gap-2 items-center mt-2">
                      <h2 className="uppercase font-bold text-center text-lg">{product.name}</h2>
                      <span className="text-gray-700 text-md">29,99€</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
