import { getProducts } from "../lib/getProducts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default async function ProductsPage() {
    const products = await getProducts();
  
    // Vérifie que les produits sont bien un tableau
    if (!Array.isArray(products)) {
      return <p>Les produits ne sont pas disponibles pour le moment.</p>;
    }
  
    return (
        <div>
          <Navbar/>
          <div className="md:mx-14 lg:p-10 p-2 flex flex-col justify-center items-center">
            <div className="p-6 flex gap-3 flex-col items-center text-white bg-rose-400 w-full justify-end">
                <h1 className="uppercase font-black md:text-6xl text-3xl">Catalogue</h1>
                <p className="text-center">Découvrez maintenant nos housses de pc portable et faites marrez vos amis,
                 votre famille ou vos collègues ! 
                </p>
            </div>
            <div className="">
                <ul className="sm:grid-cols-4 grid grid-cols-2">
                {products.map((product) => (
                    <div className="">
                        <li className="flex flex-col items-center justify-center">
                        <img src={product.thumbnail_url} alt={product.name} />
                        <h2 className="uppercase font-bold">{product.name}</h2>
                        </li>
                    </div>
                ))}
                </ul>
            </div>
          </div>
          <Footer/>
      </div>
    );
  }
  
