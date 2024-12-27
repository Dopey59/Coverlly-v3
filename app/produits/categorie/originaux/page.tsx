import { getProducts } from "../../../lib/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function Originaux() {
  let products;

  try {
    products = await getProducts(); // Récupère tous les produits
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    return <p>Une erreur est survenue lors de la récupération des produits.</p>;
  }

  // Vérifie que 'products' est un tableau
  if (!Array.isArray(products)) {
    console.error("Les données récupérées ne sont pas un tableau :", products);
    return <p>Les produits ne sont pas disponibles pour le moment.</p>;
  }

  const productIds = [369868064, 369867842, 369867683, 369867594, 369867142, 369866571, 369866023, 369497807, 369497696, 369497085, 369496969,
    369496583, 369496487, 369479504, 369451059, 369448955, 368475602, 368475504, 368474636, 368474417]; // IDs spécifiques que vous voulez afficher

  // Filtrer les produits pour ne garder que ceux avec les IDs spécifiés
  const selectedProducts = products.filter((product: { id: number }) =>
    productIds.includes(product.id)
  );

  // Vérifie qu'il y a des produits sélectionnés
  if (selectedProducts.length === 0) {
    return <p>Aucun produit ne correspond à cette catégorie pour le moment.</p>;
  }
console.log(productIds)
  return (
    <div>
      <div className="bg-gray-100/50 w-full sm:h-auto h-auto gap-4 md:p-5 p-4 flex justify-start items-start flex-col">
        <h1 className="text-2xl sm:text-5xl font-bold pt-14">Originaux</h1>
        <p className="text-base sm:text-xl text-gray-900 sm:max-w-screen-lg max-w-md text-pretty">
        La collection Originaux est une ode à l’excentricité et à la créativité. Ici, pas de règles,
         juste des designs qui osent, surprennent et captivent. Couleurs vibrantes, motifs inattendus, 
         et styles hors du commun, cette collection est faite pour ceux qui veulent se démarquer.
        </p>
      </div>
      <ul className="grid sm:grid-cols-3 grid-cols-2 gap-6 p-10">
        {selectedProducts.map((product) => (
          <li key={product.id} className="flex flex-col justify-center items-center">
            <Link href={`/produits/${product.id}`}>
              <Image
                width={500}
                height={500}
                src={product.thumbnail_url || product.sync_product?.thumbnail_url || "/placeholder.png"}
                alt={product.name || product.sync_product?.name || "Produit"}
                className=""
                priority
              />
            </Link>
            <h2 className="text-xs sm:text-base text-center uppercase font-semibold ">
              {product.name || product.sync_product?.name || "Nom du produit"}
            </h2>
            <span>29.99€</span>
          </li>
        ))}
      </ul>
    </div>
  );
}