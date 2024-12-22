import { getProducts } from "../../../lib/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function JardinDart() {

  const products = await getProducts(); // Récupère tous les produits
  const productIds = [370218064, 370217938, 370217685, 370217514, 370216999, 370216427]; // IDs spécifiques que vous voulez afficher

  // Filtrer les produits pour ne garder que ceux avec les IDs spécifiés
  const selectedProducts = products.filter((product: { id: number; }) =>
    productIds.includes(product.id)
  );

  // Vérifie que les produits sont bien un tableau
  if (!Array.isArray(selectedProducts) || selectedProducts.length === 0) {
    return <p>Les produits ne sont pas disponibles pour le moment.</p>;
  }
  console.log(products)
  return (
    <div>
      <div className="bg-gray-100/50 w-full sm:h-auto h-auto gap-4 md:p-5 p-4 flex justify-start items-start flex-col">
        <h1 className="text-2xl sm:text-5xl font-bold pt-14">Jardin d&apos;art</h1>
        <p className="text-base sm:text-xl text-gray-900 sm:max-w-screen-2xl text-pretty ">
        Ce style de design à fleurs s&apos;inspire fortement des motifs Arts & Crafts, un mouvement artistique du XIXe siècle mené par William Morris en Angleterre.
         Ce style se caractérise par des motifs floraux détaillés, symétriques et répétitifs, souvent inspirés par la nature,
        avec des couleurs riches et une touche vintage.
        </p>
      </div>
      <ul className="grid sm:grid-cols-3 grid-cols-2 gap-6 p-10">
        {selectedProducts.map((product) => (
          <li key={product.id} className="flex flex-col justify-center items-center">
            <Link href={`/produits/${product.id}`}>
              <Image width={500} height={500}
                src={product.thumbnail_url || product.sync_product.thumbnail_url}
                alt={product.name || product.sync_product.name}
                className=""
                priority
              />
            </Link>
            <h2 className="text-base sm:text-lg font-semibold ">
              {product.name || product.sync_product.name}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
