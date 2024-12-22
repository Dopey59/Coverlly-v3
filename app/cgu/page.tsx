import type { Metadata } from "next";
import "/app/globals.css";

export const metadata: Metadata = {
    title: "Conditions Générales d'Utilisation - Coverlly ",
    description: "Page des conditions générales d'utilisation du site Coverlly.",
  };

export default function CGU() {
    return(
        <>
         <section>
            <div>
                <article className=" md:m-14 m-6 pt-20 ">
                    <div className="flex flex-col justify-center gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">1. Objet des Conditions Générales d’Utilisation</h1>
                        <p className=" sm:w-full lg:text-base">Les présentes Conditions Générales d’Utilisation (CGU) ont pour objet de définir les modalités et conditions d’accès et d’utilisation du site internet Coverlly (ci-après « Coverlly »).
                        En accédant au Site, vous acceptez les présentes CGU dans leur intégralité. Si vous n’acceptez pas ces conditions, veuillez ne pas utiliser le Site.</p>
                    </div>
                </article>

                <article className="  md:m-14 m-6 ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">2. Informations Légales Propriétaire du site :</h1>
                        <p className=" sm:w-full lg:text-base ">[SNO] Siège social : [31 RUE SANTOS DUMONT, 62100 CALAIS] Numéro SIRET : [90260327300019] Directeur de la publication : [PENET WILLIAM] Hébergeur : [En cours]</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">3. Accès au Site</h1>
                        <p className=" sm:w-full lg:text-base">Le Site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet. Cependant, les frais liés à l’accès au Site (frais matériels, logiciels ou d’accès à Internet) restent à la charge de l’utilisateur.</p>
                        
                        <p className=" sm:w-full lg:text-base">Le Site peut faire l’objet de mises à jour ou d’interventions techniques, entraînant une interruption temporaire de l’accès. Nous nous efforçons de minimiser ces interruptions.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6 ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">4. Utilisation du Site</h1>
                        <p className=" sm:w-full lg:text-base">L’utilisateur s’engage à :</p>
                        <ol className="flex flex-col gap-3">
                            <li className="sm:w-full lg:text-base">- Utiliser le Site uniquement à des fins personnelles et non commerciales.</li>
                            <li className="sm:w-full lg:text-base">- Ne pas porter atteinte à l’intégrité du Site (intrusion, virus, etc.).</li>
                            <li className="sm:w-full lg:text-base">- Fournir des informations exactes lors de l’utilisation de formulaires (par exemple, création de compte).</li>
                        </ol>
                        <p className=" sm:w-full lg:text-base">En cas de non-respect de ces engagements, nous nous réservons le droit de restreindre, de suspendre l’accès au Site ou de prendre des mesures nécessaire.</p>
                    </div>
                </article>

                <article className="md:m-14 m-6">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">5. Propriété Intellectuelle </h1>
                        <p className="sm:w-full lg:text-base">Tous les éléments présents sur le Site (textes, images, graphismes, logo, etc.) sont protégés par le droit d’auteur et les lois sur la propriété intellectuelle.</p>
                        
                        <p className="sm:w-full lg:text-base">Toute reproduction, représentation, modification ou utilisation des éléments du Site sans autorisation préalable est strictement interdite.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6 ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">6. Produits et Services</h1>
                        <p className="sm:w-full lg:text-base">Le Site propose des housses pour ordinateurs portables à la vente. Nous faisons tout notre possible pour garantir la précision des descriptions de nos produits. Cependant, des erreurs peuvent survenir.</p>
                        
                        <p className="sm:w-full lg:text-base">En cas de doute, n’hésitez pas à contacter notre service client avant d’effectuer un achat.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">7. Responsabilité</h1>
                        <p className="sm:w-full lg:text-base">Nous ne saurions être tenus responsables des dommages directs ou indirects pouvant survenir lors de l’utilisation du Site, notamment en cas d’erreurs techniques ou de piratage.</p>
                        
                        <p className="sm:w-full lg:text-base">L’utilisateur est responsable de la protection de son équipement informatique contre tout virus ou intrusion externe.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">8. Liens Hypertextes</h1>
                        <p className="sm:w-full lg:text-base">Le Site peut contenir des liens vers des sites tiers. Nous ne pouvons être tenus responsables du contenu ou des pratiques de ces sites.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">9. Données Personnelles</h1>
                        <p className="sm:w-full lg:text-base">La collecte et le traitement des données personnelles des utilisateurs sont conformes au Règlement Général sur la Protection des Données (RGPD). Pour en savoir plus, veuillez consulter notre <a className="font-bold" href="/confidentialite">Politique de Confidentialité</a>.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">10. Modification des CGU</h1>
                        <p className="sm:w-full lg:text-base">Nous nous réservons le droit de modifier les présentes CGU à tout moment. Toute modification prendra effet dès sa publication sur le Site. Nous vous encourageons à consulter régulièrement cette page.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">11. Loi Applicable et Litiges</h1>
                        <p className="sm:w-full lg:text-base">Les présentes CGU sont régies par la loi française. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">12. Contact</h1>
                        <p className="sm:w-full lg:text-base">Pour toute question ou remarque concernant ces CGU, vous pouvez nous contacter via notre formulaire de <a className="font-bold" href="/contact">contact</a>.</p>
                    </div>
                </article>

            </div>
        </section>
        </>
    )
}