import { useState } from "react";
import Image from "next/image";
import "/app/globals.css";
import Navbar from '../../app/components/Navbar'
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";


const ProductDetail = ({ product, error }) => {
    // Toujours définir les hooks en haut du composant
    const [selectedSize, setSelectedSize] = useState("");
    const router = useRouter();

    // Gestion des erreurs
    if (error) {
        return <p>Erreur : {error.message}</p>;
    }
    
    // Gestion du cas où le produit n'est pas disponible
    if (!product) {
        return <p>Chargement ou produit introuvable...</p>;
    }
    
    // Extraction des informations nécessaires
    const { sync_product, sync_variants } = product;
    const { name, thumbnail_url } = sync_product;
    
    // Initialiser la taille sélectionnée
    if (!selectedSize && sync_variants.length > 0) {
        setSelectedSize(sync_variants[0].size || ""); // Définit une taille par défaut
    }
    
    // Fonction pour gérer la sélection
    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handlePayment = async () => {
        const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
      
        const items = [
          {
            name: "Pochette de protection",
            description: `${product.sync_product.name} (${selectedSize} pouces)`,
            image: product.sync_product.thumbnail_url,
            price: 29.99,
            quantity: 1,
          },
        ];
      
        try {
          const res = await fetch("/api/checkout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items,
              customerEmail: "", // Email par défaut ou récupéré dynamiquement
            }),
          });
      
          const { id } = await res.json();
          const stripe = await stripePromise;
          await stripe.redirectToCheckout({ sessionId: id });
        } catch (error) {
          console.error("Erreur lors de la création de la session Stripe", error);
        }
      };
      
      

    return (
        <article className="">
            <Navbar/>
            <div className="grid lg:grid-cols-2 grid-cols-1 p-4 place-items-center sm:h-screen w-full">
                <div className="flex flex-col md:p-6 p-3 items-center text-center ">
                    <h1 className="uppercase font-bold md:text-4xl text-2xl sm:w-3/4">Pochette de protection - | {name || "Nom non spécifié"} {selectedSize }</h1>
                    <div className="">
                        <Image
                            src={thumbnail_url}
                            alt={name || "Aperçu du produit"}
                            width={500}
                            height={500}
                            
                            priority
                        />
                    </div>
                    <div className="flex gap-5 items-center justify-center">
                        <p className="text-3xl">29.99€</p>
                        <p className="text-xl font-bold line-through text-rose-400">34.99€</p>
                    </div>
                </div>
                    {/* Sélecteur de taille */}
                    <div className="flex flex-col sm:gap-8 sm:p-6 w-full">
                        <div className="flex flex-col gap-6 max-w-screen-md">
                            <h1 className="uppercase font-bold md:text-4xl text-2xl mt-24">Son histoire</h1>
                            <p className="font-regular sm:w-full leading-relaxed lg:text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio asperiores dolore maiores fugiat aliquid dignissimos sit itaque culpa tenetur neque, corrupti sequi corporis repellat ipsum quidem molestiae doloremque voluptas velit.</p>
                        </div>

                        <div className="mt-6 sm:mt-2">
                            <hr />
                        </div>

                        <div className="flex flex-col gap-5 mt-6 sm:mt-2">
                            <label htmlFor="size-selector">Choisir une taille : </label>
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
                            {/* Affichage de la taille sélectionnée */}
                            <p className="">
                                Taille sélectionnée :{" "}
                                <strong>{selectedSize || "Aucune taille sélectionnée"} pouces</strong>
                            </p>
                            <div className="flex flex-col gap-3 rounded p-2">
                                <div className="flex gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 10h6c1.654 0 3 1.346 3 3s-1.346 3-3 3h-3v2h3c2.757 0 5-2.243 5-5s-2.243-5-5-5H9V5L4 9l5 4v-3z"></path></svg>
                                    <p>30 jours pour retourner l&apos;article</p>
                                </div>
                                <div className="flex gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39 1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path></svg>
                                    <p>Eco Friendly - Production sur commande</p>
                                </div>
                                <div className="flex gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.993 7.95a.96.96 0 0 0-.029-.214c-.007-.025-.021-.049-.03-.074-.021-.057-.04-.113-.07-.165-.016-.027-.038-.049-.057-.075-.032-.045-.063-.091-.102-.13-.023-.022-.053-.04-.078-.061-.039-.032-.075-.067-.12-.094-.004-.003-.009-.003-.014-.006l-.008-.006-8.979-4.99a1.002 1.002 0 0 0-.97-.001l-9.021 4.99c-.003.003-.006.007-.011.01l-.01.004c-.035.02-.061.049-.094.073-.036.027-.074.051-.106.082-.03.031-.053.067-.079.102-.027.035-.057.066-.079.104-.026.043-.04.092-.059.139-.014.033-.032.064-.041.1a.975.975 0 0 0-.029.21c-.001.017-.007.032-.007.05V16c0 .363.197.698.515.874l8.978 4.987.001.001.002.001.02.011c.043.024.09.037.135.054.032.013.063.03.097.039a1.013 1.013 0 0 0 .506 0c.033-.009.064-.026.097-.039.045-.017.092-.029.135-.054l.02-.011.002-.001.001-.001 8.978-4.987c.316-.176.513-.511.513-.874V7.998c0-.017-.006-.031-.007-.048zm-10.021 3.922L5.058 8.005 7.82 6.477l6.834 3.905-2.682 1.49zm.048-7.719L18.941 8l-2.244 1.247-6.83-3.903 2.153-1.191zM13 19.301l.002-5.679L16 11.944V15l2-1v-3.175l2-1.119v5.705l-7 3.89z"></path></svg>
                                    <p>Expédiée et livrée en 6 à 8 jours (ouvrés)</p>
                                </div>
                            </div>

                           <div>
                            <hr />
                            </div>

                            <div className="flex gap-4 items-center">
                                <div className="bg-blue-500 sm:w-1/4 w-full p-2 hover:cursor-pointer rounded text-center text-white">
                                    <button onClick={handlePayment}>Acheter</button>
                                </div>

                                <div className="border-black  border-2 sm:w-1/4 w-full p-2 rounded text-center">
                                    <button>Ajouter au panier</button>
                                </div> 
                            </div>
                        </div>
                    </div>
            </div>
        </article>
    );
};

export async function getServerSideProps({ params }) {
    const token = process.env.API_TOKEN;

    try {
        const res = await fetch(
            `https://api.printful.com/store/products/${params.id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error.message || "Erreur inconnue");
        }

        const data = await res.json();
        console.log("Données API reçues :", data);

        return {
            props: { product: data.result, error: null },
        };
    } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error.message);
        return {
            props: { product: null, error: { message: error.message } },
        };
    }
}

export default ProductDetail;
