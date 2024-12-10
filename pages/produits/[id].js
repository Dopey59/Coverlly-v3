import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../app/components/Navbar";
import { loadStripe } from "@stripe/stripe-js";
import useGeolocation from "../../app/hooks/useGeolocation"; // Assurez-vous d'avoir créé ce hook séparément
import "/app/globals.css";


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const ProductDetail = ({ product, error }) => {
  // Récupérer les données du produit
  const { sync_product, sync_variants } = product || {};
  const { name, thumbnail_url } = sync_product || {};

  // Gestion de la taille sélectionnée
  const [selectedSize, setSelectedSize] = useState("");
  useEffect(() => {
    if (!selectedSize && sync_variants?.length > 0) {
      setSelectedSize(sync_variants[0].size || ""); // Taille par défaut
    }
  }, [selectedSize, sync_variants]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
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
  ];
  
  // Si l'utilisateur change son pays
  const recipient = {
    country_code: selectedCountry || "FR", // Pays par défaut
    city: "Paris", // Demander ou rendre dynamique
    zip: "75001", // Demander ou rendre dynamique
  };

  if (loading) return <p>Chargement de votre localisation...</p>;

  if (error) return <p>Erreur : {error.message}</p>;

  if (!product) return <p>Chargement ou produit introuvable...</p>;

  // Gestion du paiement avec Stripe
  const handlePayment = async () => {
    const items = [
      {
        name: sync_product.name,
        description: `${name} (${selectedSize})`,
        image: thumbnail_url,
        price: parseFloat(sync_variants.find((v) => v.size === selectedSize)?.retail_price || 0),
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

  return (
    <article>
      <Navbar />
        <div className="grid lg:grid-cols-2 grid-cols-1 p-4 place-items-center sm:h-screen w-full">
            <div className="flex flex-col md:p-6 p-3 items-center text-center">
                <h1 className="uppercase font-bold md:text-4xl text-2xl sm:w-3/4">
                    {`Pochette de protection - ${name || "Nom non spécifié"} (${selectedSize})`}
                </h1>
                <div>
                    <Image src={thumbnail_url} alt={name || "Aperçu du produit"} width={500} height={500} priority />
                </div>
                <div className="flex gap-5 items-center justify-center">
                    <p className="text-3xl">{sync_variants[0]?.retail_price || "Prix indisponible"}€</p>
                </div>
            </div>

            <div className="flex flex-col sm:gap-8 sm:p-6 w-full">
                <div className="flex flex-col gap-6 max-w-screen-md">
                    <h1 className="uppercase font-bold md:text-4xl text-2xl mt-24">Son histoire</h1>
                    <p className="font-regular sm:w-full leading-relaxed lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis cumque voluptate tempore aut cupiditate vitae, quisquam rerum alias architecto? Perspiciatis adipisci facilis nostrum deserunt ratione sapiente quia quo soluta dolor?
                    </p>
                </div>

                <div className="mt-6 sm:mt-2">
                <hr />
            </div>

          {/* Sélecteur de taille */}
            <div className="flex flex-col gap-5 mt-6 sm:mt-2">
                <label htmlFor="size-selector">Choisir une taille :</label>
                <select
                id="size-selector"
                value={selectedSize}
                onChange={handleSizeChange}
                className="bg-black text-white p-2 rounded-md w-auto sm:w-1/6"
                >
                {sync_variants.map((variant, index) => (
                    <option key={index} value={variant.size}>
                    {variant.size || `Taille inconnue ${index + 1}`}
                    </option>
                ))}
                </select>

                <label htmlFor="country-selector">Choisissez votre pays :</label>
                <select
                id="country-selector"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="bg-black text-white p-2 rounded-md w-auto sm:w-1/6"

                >
                {EUROPEAN_COUNTRIES_LIST.map((country) => (
                    <option key={country.code} value={country.code}>
                    {country.name}
                    </option>
                ))}
                </select>
                <hr />  

                <div className="flex gap-4 items-center">
                    <button
                    className="bg-blue-500 sm:w-1/4 w-full p-2 hover:cursor-pointer rounded text-center text-white"
                    onClick={handlePayment}
                    >
                    Acheter
                    </button>
                    <button
                    className="border-black sm:w-1/4 w-full p-2 hover:cursor-pointer rounded text-center text-white"
                    >
                    Continuer mes achats
                    </button>
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
