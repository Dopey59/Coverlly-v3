"use client"
import { useState, useEffect } from "react";

export default function Confidentialite(){
    const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);
    return(
        <div>
            {/* <!-- Blog Article --> */}
        <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-2xl">
                {/* <!-- Content --> */}
                <div className="space-y-5 md:space-y-8">
                    <div className="flex flex-col md:my-6">
                        <h1 className="text-2xl font-bold md:text-4xl">Politique d’Utilisation des Cookies</h1>
                    </div>
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold md:text-2xl mt-14">Qu&apos;est-ce qu&apos;un cookie ?</h2>
                            <p className="text-lg text-gray-800">
                            Un cookie est un petit fichier texte enregistré sur votre appareil (ordinateur, tablette ou smartphone) lorsque vous visitez un site web. Les cookies permettent au site de se souvenir de vos actions et préférences (comme le login, la langue et d’autres préférences d’affichage) pendant un certain temps.
                            </p>
                        </div>

                    <h2 className="text-2xl font-bold md:text-3xl">Pourquoi utilisons-nous des cookies ?</h2>

                    <p className="text-lg text-gray-800">Nous utilisons des cookies pour plusieurs raisons :</p>
                    <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                        <li className="ps-2"><strong>1. Cookies essentiels : </strong> Ces cookies sont nécessaires pour que notre site fonctionne correctement (exemple : maintenir votre session active).</li>
                        <li className="ps-2"><strong>2. Cookies analytiques : </strong> Pour analyser le trafic et comprendre comment les utilisateurs interagissent avec notre site.</li>
                        <li className="ps-2"><strong>3. Cookies publicitaires : </strong> Pour afficher des annonces pertinentes en fonction de vos centres d’intérêts.</li>
                    </ul>

                    <h2 className="text-2xl font-bold md:text-3xl">Types de cookies utilisés</h2>
                    
                    <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                        <li className="ps-2"><strong>1. Cookies strictement nécessaires : </strong> Permettent d’utiliser les fonctions de base du site.</li>
                        <li className="ps-2"><strong>2. Cookies de performance : </strong> Aident à mesurer les performances et à améliorer l’expérience utilisateur.</li>
                        <li className="ps-2"><strong>3. Cookies de fonctionnalité : </strong> Retiennent vos préférences comme la langue ou la région.</li>
                        <li className="ps-2"><strong>4. Cookies publicitaires : </strong> Collectent des informations pour personnaliser les publicités affichées.</li>
                    </ul>

                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">Comment gérer vos préférences ?</h2>
                    </div>
                    <p className="text-lg text-gray-800">Vous pouvez accepter ou refuser les cookies via la bannière de consentement affichée lors de votre première visite. Vous pouvez également configurer votre navigateur pour refuser ou supprimer les cookies.</p>

                    <h2 className="text-2xl font-bold md:text-3xl">Consentement</h2>
                    <p className="text-lg text-gray-800">En utilisant notre site, vous acceptez notre utilisation des cookies conformément à cette politique. Si vous choisissez de refuser certains cookies, certaines fonctionnalités de notre site peuvent être affectées.</p>
                    
                    <h2 className="text-2xl font-bold md:text-3xl">Mise à jour de la politique</h2>
                    <p className="text-lg text-gray-800">Nous nous réservons le droit de modifier cette politique de cookies à tout moment. Les modifications seront publiées sur cette page.</p>
                                        
                    <blockquote className="text-center p-4 sm:px-7">
                        <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                        Dernière mise à jour : {currentDate}.
                        </p>
                    </blockquote> 
                </div>
                {/* <!-- End Content --> */}
            </div>
        </div>
        {/* <!-- End Blog Article --> */}
        </div>
    )
}