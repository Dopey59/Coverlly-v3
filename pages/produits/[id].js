
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../app/components/Navbar";
import { loadStripe } from "@stripe/stripe-js";
import useGeolocation from "../../app/hooks/useGeolocation"; // Assurez-vous d'avoir créé ce hook séparément
import Details from '../../app/components/details'
// import { addToCart } from "../../app/utils/cart";
import Link from "next/link";
import "/app/globals.css";
import PrelineScript from "../../app/components/PrelineScript";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
 
const ProductDetail = ({ product, error }) => {
  const { sync_product, sync_variants } = product || {};
  const { name, thumbnail_url } = sync_product || {};

  // État pour la taille et le prix sélectionnés
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0); // Nouveau : pour le prix

  useEffect(() => {
    if (typeof window !== 'undefined' && window.HS && window.HS.core) {
      window.HS.core.runAll();
    }
    
    if (sync_variants?.length > 0) {
      // Taille et prix par défaut
      const defaultVariant = sync_variants[0];
      setSelectedSize(defaultVariant.size || "");
      setSelectedPrice(parseFloat(defaultVariant.retail_price || 0));
    }
  }, [sync_variants]);

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setSelectedSize(size);

    // Trouver la variante correspondante et mettre à jour le prix
    const variant = sync_variants.find((v) => v.size === size);
    if (variant) {
      setSelectedPrice(parseFloat(variant.retail_price || 0));
    }
  };

  // Hook pour géolocalisation
  const { countryCode, setCountryCode, loading } = useGeolocation();
  const [selectedCountry, setSelectedCountry] = useState(countryCode);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCountryCode(event.target.value);
  };

  const EUROPEAN_COUNTRIES_LIST = [
    { code: "AT", name: "Autriche" },
    { code: "BE", name: "Belgique" },
    { code: "BG", name: "Bulgarie" },
    { code: "CY", name: "Chypre" },
    { code: "CZ", name: "République tchèque" },
    { code: "DE", name: "Allemagne" },
    { code: "DK", name: "Danemark" },
    { code: "EE", name: "Estonie" },
    { code: "ES", name: "Espagne" },
    { code: "FI", name: "Finlande" },
    { code: "FR", name: "France" },
    { code: "GR", name: "Grèce" },
    { code: "HR", name: "Croatie" },
    { code: "HU", name: "Hongrie" },
    { code: "IE", name: "Irlande" },
    { code: "IT", name: "Italie" },
    { code: "LT", name: "Lituanie" },
    { code: "LU", name: "Luxembourg" },
    { code: "LV", name: "Lettonie" },
    { code: "MT", name: "Malte" },
    { code: "NL", name: "Pays-Bas" },
    { code: "PL", name: "Pologne" },
    { code: "PT", name: "Portugal" },
    { code: "RO", name: "Roumanie" },
    { code: "SE", name: "Suède" },
    { code: "SI", name: "Slovénie" },
    { code: "SK", name: "Slovaquie" },
    // Ajoutez d'autres pays si nécessaire
  ];

  const recipient = {
    country_code: selectedCountry,
    city: "Paris",
    zip: "75001",
  };

  if (loading)  return (
    <div className="">
      <div className="h-screen flex justify-center items-center text-center">
        <p className="font-bold md:text-3xl text-2xl ">Chargement de votre localisation...📍</p>
      </div>
    </div>

  )

  if (error)  return (
    <div className="">
      <div className="h-screen flex flex-col gap-3 justify-center items-center">
        <p className="font-bol md:text-3xl text-2xl">Nous travaillons probablement déjà sur le problème ! 🛠️</p>
        <p className="font-bol md:text-3xl text-2xl">Désolé pour la gêne occasionnée. 🫢</p>
      </div>
    </div>

  )

  if (!product)  return (
    <div className="">
      <div className="h-screen flex justify-center items-center">
        <p className="font-bol md:text-3xl text-2xl">Oops ! Une erreur est survenue.. ❌</p>;
      </div>
    </div>

  );

  const handlePayment = async () => {
    const items = [
      {
        name: sync_product.name,
        description: `${name} (${selectedSize})`,
        image: thumbnail_url,
        price: selectedPrice,
        quantity: 1,
        variant_id: sync_variants.find((v) => v.size === selectedSize)?.variant_id,
      },
    ];

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items, recipient }),
      });

      const { id } = await res.json();
      if (!id) {
        alert("Une erreur est survenue lors de la création de la session Stripe.");
        return;
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Erreur lors de la gestion du paiement :", error.message);
    }
  };


// const handleAddToCart = () => {
//   const item = {
//     name: sync_product.name,
//     description: `${name} (${selectedSize})`,
//     image: thumbnail_url,
//     price: selectedPrice,
//     quantity: 1,
//     variant_id: sync_variants.find((v) => v.size === selectedSize)?.variant_id,
//     size: selectedSize,
//   };

//   try {
//     addToCart(item);
//     alert("Produit ajouté au panier !");
//   } catch (error) {
//     console.error("Erreur lors de l'ajout au panier :", error.message);
//   }
// };

  return (
    <article>
      <Navbar />
      <PrelineScript/>
        <div className="grid lg:grid-cols-2 grid-cols-1 p-4 h-screen w-full">
            <div className=" mt-10  flex flex-col md:p-6 p-3 items-center text-center">
                <h1 className="uppercase font-bold md:text-4xl text-2xl sm:w-3/4">
                    {`Pochette de protection - ${name || "Nom non spécifié"} (${selectedSize})`}
                </h1>
                <div>
                    <Image src={thumbnail_url} alt={name || "Aperçu du produit"} width={500} height={500} priority />
                </div>
                <div className="flex gap-3 items-center justify-center">
                  <p className="text-3xl">{selectedPrice.toFixed(2)}€</p>{/* Affiche le prix dynamique */}
                  <span className=" text-gray-500 text-sm line-through">34.99€</span>
                </div>
            </div>

            <div className="flex flex-col sm:gap-8 sm:p-6 mt-14 sm:mt-0 w-full">
                <div className="bg-gray-100 rounded p-6 flex flex-col gap-6 max-w-screen-md text-balance">
                    <h1 className="uppercase font-bold md:text-4xl text-2xl mt-4">Son Histoire</h1>
                    <p className="font-regular sm:w-full leading-relaxed lg:text-lg">
                    Une housse d’ordinateur, c’est plus qu’un accessoire : c’est une déclaration. Avec nos designs à la fois artistiques et malicieusement originaux, chaque housse devient une œuvre d’art portable qui fera sourire même les plus sérieux. Entre protection solide et inspiration subtile, ces pochettes transforment le quotidien en une petite exposition privée. Sortez-la de votre sac et laissez l’art parler pour vous – un mélange parfait de style, d’humour et de créativité.</p>
                    <span className="text-gray-600">Pour Mackbook et ordinateur portable.</span>
                </div>

                <div className="mt-6 sm:mt-2">
                <hr />
            </div>
            <h1 className="uppercase font-bold md:text-4xl text-2xl mt-10 sm:mt-5">Détails</h1>
            <Details/>

            {/* Sélecteur de taille */}
            <div className="bg-gray-100 rounded p-6 flex flex-col gap-5 mt-10 sm:mt-5">
                  <label htmlFor="size-selector">Choisir une taille :</label>
                  <div className="relative flex gap-2 items-center">
                    <select
                    id="size-selector"
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="bg-black text-white p-2 rounded-md w-64 md:w-max-lg"
                    >
                    {sync_variants.map((variant, index) => (
                        <option key={index} value={variant.size}>
                        {variant.size || `Taille inconnue ${index + 1}`}
                        </option>
                    ))}
                    </select>
                  </div>

                {/* A roujeter dynamiquement avec useState */}
                  <label  className="" htmlFor="country-selector">Choisissez votre pays :</label>
                <div className="flex items-center gap-2">
                  <select
                  id="country-selector"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="bg-black text-white p-2 rounded-md w-64 md:w-max-lg"

                  >
                  {EUROPEAN_COUNTRIES_LIST.map((country) => (
                      <option key={country.code} value={country.code}>
                      {country.name}
                      </option>
                  ))}
                  </select> 
                </div>
                <hr />
                 <div className="flex flex-col gap-3 rounded p-2 ">
                  <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"></path></svg>
                      <p>14 jours pour changer d&apos;avis</p>
                  </div>
                  <div className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39 1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path></svg>
                      <p>Eco Friendly - Production sur commande</p>
                  </div>
                  <div className="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"></path></svg>
                      <p>Expédiée et livrée en 2 à 5 jours (ouvrés)</p>
                  </div>
                </div>
                <hr />  

                <div className="flex flex-col sm:flex-row py-4 md:justify-start items-center gap-6 ">
                    <button
                    className=" max-w-xs duration-700 ease-in-out bg-black text-white sm:w-1/4 w-full font-medium p-2 hover:cursor-pointer hover:border-black hover:border-2 hover:bg-blue-500 hover:text-white transition hover:duration-700 rounded text-center"
                    onClick={handlePayment}
                    >
                    Acheter
                    </button>
                    <Link href='/produits'>
                    <button className="border-black font-medium  max-w-xs hover:text-blue-500 transition hover:duration-700 rounded duration-700 ease-in-out w-full p-2 hover:cursor-pointer text-center border-2"
                    >
                      Retourner en arrière
                    </button>
                    
                    </Link>
                    {/* <button
                      className="border-black sm:w-1/4 font-medium  max-w-xs  hover:text-blue-500 transition hover:duration-700 rounded duration-700 ease-in-out  w-full p-2 hover:cursor-pointer text-center border-2"
                      onClick={handleAddToCart}
                    >
                      Ajouter au panier
                    </button> */}
                </div>
            </div>
        </div>
      </div>
    </article>
  );
};

// Récupération des données du produit via getServerSideProps
export async function getServerSideProps({ params }) {
  const token = process.env.API_TOKEN;

  try {
    const res = await fetch(`https://api.printful.com/store/products/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error.message || "Erreur inconnue");
    }

    const data = await res.json();
    return {
      props: { product: data.result, error: null },
    };
  } catch (error) {
    return {
      props: { product: null, error: { message: error.message } },
    };
  }
}

export default ProductDetail;
