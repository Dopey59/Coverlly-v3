
import { getProducts } from "../lib/getProducts";
import Image from 'next/image';
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalogue de produits - Coverly   ",
  description: "Page de la liste de tout les produits repértorié sur le site Coverlly",
};

export default async function ProductsPage() {
    const products = await getProducts();
  
    // Vérifie que les produits sont bien un tableau
    if (!Array.isArray(products)) {
      return <p>Les produits ne sont pas disponibles pour le moment.</p>;
    }
  console.log(products)
    return (
        <div className="bg-white text-black">
          {/* Header Présentation */}
          <div className="md:mx-14  flex flex-col justify-center items-center">
            <div className="p-6 flex gap-5 flex-col items-center justify-center text-white anim-product h-96  w-screen">
                <h1 className="uppercase font-black md:text-6xl text-3xl">Catalogue</h1>
                <h4 className="text-center text-sm/6 sm:text-base font-bold">⏰ Promotions terminées le 24 Décembre ⏰</h4>
                {/* <p className="text-center text-lg">Découvre dès maintenant notre large gamme de housses pour pc portable.</p> */}
                <p className="text-center text-lg">🏷️ -10% Avec le code : HOHO24 - à appliquer lors de votre passage en caisse</p>

            </div>
   
            {/* Affichage des produits */}
            <div className="p-2 md:p-10">
              <div className="md:grid-cols-3 grid grid-cols-2">
                {products.map((product) => (
                  <div key={product.id} className="flex flex-col items-center">
                      <div className="relative flex flex-col items-center justify-center">
                      <Link href={`/produits/${product.id}`}>
                        <Image  
                          loading="lazy"
                          src={product.thumbnail_url}
                          alt={product.name}
                          width={500} 
                          height={500}/>
                          <div className="flex flex-col gap-2 items-center">
                          <h2 className="uppercase font-bold text-center">{product.name}</h2>
                          <span className="w-fit uppercase bg-red-500 p-2 text-white rounded-full text-sm">soldé</span>
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
  
