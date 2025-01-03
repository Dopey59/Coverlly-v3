
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
 
const ProductDetail = ({ product }) => {

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
  const { countryCode, setCountryCode } = useGeolocation();
  const [selectedCountry, setSelectedCountry] = useState(countryCode);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setCountryCode(event.target.value);
  };

  const EUROPEAN_COUNTRIES_LIST = [
    { code: "AT", name: "Autriche" }, { code: "BE", name: "Belgique" },{ code: "BG", name: "Bulgarie" },{ code: "CY", name: "Chypre" },{ code: "CZ", name: "République tchèque" },{ code: "DE", name: "Allemagne" },{ code: "DK", name: "Danemark" },{ code: "EE", name: "Estonie" },{ code: "ES", name: "Espagne" },{ code: "FI", name: "Finlande" },{ code: "FR", name: "France" },{ code: "GR", name: "Grèce" },{ code: "HR", name: "Croatie" },{ code: "HU", name: "Hongrie" },{ code: "IE", name: "Irlande" },{ code: "IT", name: "Italie" },{ code: "LT", name: "Lituanie" },{ code: "LU", name: "Luxembourg" },{ code: "LV", name: "Lettonie" },{ code: "MT", name: "Malte" },{ code: "NL", name: "Pays-Bas" },{ code: "PL", name: "Pologne" },{ code: "PT", name: "Portugal" },{ code: "RO", name: "Roumanie" },{ code: "SE", name: "Suède" },{ code: "SI", name: "Slovénie" },{ code: "SK", name: "Slovaquie" },
    // Ajoutez d'autres pays si nécessaire
  ];

  const recipient = {
    country_code: selectedCountry,
    city: "Paris",
    zip: "75001",
  };


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
        cache: 'force-cache', // Force la mise en cache
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
    <div className="grid md:grid-cols-2 grid-cols-1 lg:p-24 p-2 h-screen w-full">
        <div className=" mt-10 flex flex-col lg:p-24 p-3 items-center gap-10">
          {/* Titre et prix version mobile */}
          <div className="lg:hidden flex-col items-start gap-1 lg:max-w-xl flex">
            <h1 className="font-bold md:text-4xl text-3xl">
                {`Pochette de protection - ${name || "Nom non spécifié"} (${selectedSize})`}
            </h1>
            <div className="flex gap-3 w-full ">
              <p className="text-xl">{selectedPrice.toFixed(2)}€</p>{/* Affiche le prix dynamique */}
              <span className=" text-gray-500 text-base line-through">34.99€</span>
            </div>
          </div>
            {/* Titre et prix version mobile */}

            {/* Image Produit */}
            <div>
                <Image src={thumbnail_url} alt={name || "Aperçu du produit"} width={800} height={800} priority />
            </div>
            {/* Titre et prix version web */}
        </div>

          <div className="sm:block flex flex-col justify-center items-center sm:gap-8 sm:p-6 mt-4 sm:mt-0 w-full">
            {/* Titre et prix version web */}
            <div className="lg:flex flex-col items-start gap-1 lg:max-w-md hidden">
              <h1 className="font-bold md:text-4xl  text-2xl">
                  {`Pochette de protection - ${name || "Nom non spécifié"} (${selectedSize})`}
              </h1>
              <div className="flex gap-3 ">
                <p className="text-xl">{selectedPrice.toFixed(2)}€</p>{/* Affiche le prix dynamique */}
                <span className=" text-gray-500 text-base line-through">34.99€</span>
              </div>
            </div>
              {/* Titre et prix version web */}
        {/* Sélecteur de taille */}
        <div className=" sm:p-6 p-3 flex flex-col gap-5 md:items-start justify-center items-center sm:justify-normal w-full mt-5">
            <div className="relative flex gap-2 justify-start w-full flex-col p-2 sm:p-0">
              <div>
                <select
                id="size-selector"
                value={selectedSize}
                onChange={handleSizeChange}
                className="rounded-lg  md:w-96 w-full"
                >
                {sync_variants.map((variant, index) => (
                  <option key={index} value={` ${variant.size}`}>
                    {variant.size || `Taille inconnue ${index + 1}`}
                    </option>
                ))}
                </select>
              </div>

              {/* A roujeter dynamiquement avec useState */}
              <div>
                <select
                id="country-selector"
                value={selectedCountry}
                onChange={handleCountryChange}
                className=" rounded-lg w-full md:w-96"

                >
                {EUROPEAN_COUNTRIES_LIST.map((country) => (
                    <option key={country.code} value={country.code}>
                    {country.name}
                    </option>
                ))}
                </select> 
              </div>
            </div>
              {/* Container */}
              <div className="flex flex-col gap-2 rounded   w-full">
                {/* Trust Badges */}
                <div className=" flex flex-col gap-1 justify-center items-center text-balance">
                  <div className="flex items-center w-full gap-2">
                    <div className="bg-blue-100 rounded flex items-center p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" fill="blue" height="20" viewBox="0 0 24 24"><path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"></path></svg>
                    </div>
                      <p className="w-full sm:text-base text-sm text-gray-500">14 jours pour changer d&apos;avis</p>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <div className="bg-blue-100 rounded flex items-center p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="blue"  width="20" height="20" viewBox="0 0 24 24"><path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39 1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path></svg>
                    </div>
                      <p className="w-full sm:text-base text-sm text-gray-500">Eco Friendly - Production à la commande</p>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <div className="bg-blue-100 rounded flex items-center p-1">
                      <svg xmlns="http://www.w3.org/2000/svg"  fill="blue"  width="20" height="20" viewBox="0 0 24 24"><path d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"></path></svg>
                    </div>
                    <p className="w-full sm:text-base text-sm text-gray-500">Expédiée et livrée en 2 à 5 jours (ouvrés)</p>
                  </div>
                </div>
                {/* END - Trust Badges */}

                  {/* CTA button */}
                  <div className="flex flex-col py-4 sm:justify-normal justify-center items-center md:items-start  ">
                    <button
                    className=" bg-blue-500 text-white font-medium p-2 hover:cursor-pointer rounded  w-72 md:w-96 text-center"
                    onClick={handlePayment}
                    >
                    Acheter
                    </button>
                  
                    {/* <button
                      className="border-black sm:w-1/4 font-medium  max-w-xs  hover:text-blue-500 transition hover:duration-700 rounded duration-700 ease-in-out  w-full p-2 hover:cursor-pointer text-center border-2"
                      onClick={handleAddToCart}
                      >
                      Ajouter au panier
                      </button> */}
                  </div>
                  {/* END - CTA button */}
                  <div>
                  <p className="text-gray-500 text-sm max-w-sm md:max-w-lg">Un problème avec votre dernier achat ? Contactez-nous
                    <Link href="/contact" className="underline-offset-2 underline"> ici. </Link> Vous pouvez également consulter notre rubrique
                    <Link className="text-blue-500" rel="stylesheet" href="/retour&remboursement"> de retour & remboursement</Link>.
                  </p>
                  </div>
              </div>
              {/* END - Container */}

            <div className=" flex flex-col gap-6 p-2 sm:p-0 text-balance  sm:max-w-screen-lg">
              <div>
                <h1 className="title uppercase font-bold md:text-4xl text-2xl mt-4 sm:mt-14">Son Histoire</h1>
              </div>
                <p className="font-regular leading-relaxed lg:text-lg">
                Une housse d’ordinateur, c’est plus qu’un accessoire : c’est une déclaration. Avec nos designs à la fois artistiques et malicieusement originaux, chaque housse devient une œuvre d’art portable qui fera sourire même les plus sérieux. Entre protection solide et inspiration subtile, ces pochettes transforment le quotidien en une petite exposition privée. Sortez-la de votre sac et laissez l’art parler pour vous – un mélange parfait de style, d’humour et de créativité.</p>
                <span className="text-gray-600">Pour Macbook et ordinateur portable.</span>
            </div>

            <div className=" flex flex-col gap-6 p-2 sm:p-0 text-balance sm:max-w-screen-lg max-w-screen-md">
              <div>
                <h1 className="title uppercase font-bold md:text-4xl text-2xl mt-4 sm:mt-14">Points Forts</h1>
              </div>
                <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                    <li className="ps-2">Nos housses sont conçues pour durer : chaque modèle est imprimé à la demande, avec des encres non toxiques certifiées Oeko-Tex.</li>
                    <li className="ps-2">Grâce à la technologie d’impression directe sur textile, vos designs préférés prennent vie avec des couleurs riches et éclatantes.</li>
                    <li className="ps-2">Chaque commande est réalisée avec soin pour limiter le gaspillage et offrir un produit unique et responsable.</li>
                </ul>
            </div>
        
            
              <Details/>

              {/* DTG Infos */}
              <div className="Infos-Qualité p-2 w-full max-w-lg ">
                <p className="text-gray-500 text-balance text-sm md:max-w-xl">Imprimée à la demande grâce à des techniques avancées comme l’impression directe sur textile (DTG),
                cette housse offre des couleurs éclatantes et une tenue exceptionnelle dans le temps.
                Fabriquée avec des encres écologiques et un processus respectueux de l’environnement,
                  elle allie qualité et durabilité.</p>
                  <Link className="text-blue-500 text-sm text-medium" href="/fabrication">Découvrez notre processus de fabrication.</Link>
              </div>
              {/* END - DTG Infos */}
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
      cache: 'force-cache', // Force la mise en cache
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