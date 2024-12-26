import { Metadata } from "next";
import "/app/globals.css";

export const metadata: Metadata = {
    title: "Retour et Remboursement - Coverly   ",
    description: "Politique de retour et remboursement du site web Coverlly",
  };

export default function RetourEtRemboursement(){
    return(
        <section>
            <div>
                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">Politique de retour</h1>
                        <p className=" sm:w-full lg:text-base">1. Droit de Rétractation
                        Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.</p>
                    </div>
                </article>

                <article className="  md:m-14 m-6 ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h1 className="uppercase font-black sm:text-3xl text-2xl">Exceptions au Droit de Rétractation</h1>
                        <p className=" sm:w-full lg:text-base ">Les produits personnalisés ou fabriqués sur commande (ex. impression à la demande) ne sont pas éligibles au droit de rétractation, sauf en cas de défaut ou d’erreur dans la fabrication.</p>
                        <h2 className="md:text-2xl text-xl"><strong>2. Retours pour Produits Défectueux ou Erreurs </strong></h2>
                        <p className=" sm:w-full lg:text-base">
                        Si le produit que vous avez reçu présente un défaut, une erreur d’impression ou des dommages lors du transport, veuillez nous contacter dans les 7 jours suivant la réception de votre commande à l&apos;adresse suivante : coverlly.contact@gmail.com.
                        <br /><br />Nous vous demanderons de fournir les éléments suivants :
                        </p>
                        <ol className="flex flex-col gap-3">
                            <li className="sm:w-full lg:text-base">- Une photo claire du produit défectueux ou endommagé.</li>
                            <li className="sm:w-full lg:text-base">- Une explication détaillée du problème rencontré.</li>
                        </ol>
                        <p className="sm:w-full lg:text-base">Si votre demande est acceptée, nous procéderons au remplacement ou au remboursement du produit. Dans certains cas, nous pourrons éviter le retour physique du produit et proposer une solution immédiate.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h2 className="md:text-2xl text-xl"><strong>3. Procédure de Retour Pour initier un retour</strong></h2>
                        <ol className="flex flex-col gap-3">
                            <li className="sm:w-full lg:text-base">- Contactez-nous à coverlly.contact@gmail.com en précisant votre numéro de commande.</li>
                            <li className="sm:w-full lg:text-base">- Nous vous fournirons les instructions pour effectuer le retour.</li>
                        </ol>
                        <h3 className="sm:w-full lg:text-base"><strong>Adresse de Retour</strong></h3>
                        <ol className="flex flex-col gap-3">
                            <li className="sm:w-full lg:text-base">- En cas de produit défectueux ou d&apos;erreur : une adresse de retour pourra être communiquée pour renvoyer le colis à notre partenaire de production (Printful) si nécessaire.</li>
                            <li className="sm:w-full lg:text-base">- En cas de retour volontaire (changement d’avis, erreur de taille non couverte par la garantie) : le produit devra être retourné à l&apos;adresse suivante : 7 Rue du Pont Neuf, Lille, 59800, France.</li>
                        </ol>
                    </div>
                </article>

                <article className=" md:m-14 m-6 ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h2 className="md:text-2xl text-xl"><strong>4. Frais de Retour</strong></h2>
                        <ol className="flex flex-col gap-3">
                            <li className="sm:w-full lg:text-base">- En cas de produit défectueux ou erreur de notre part : les frais de retour seront pris en charge par Coverlly.</li>
                            <li className="sm:w-full lg:text-base">- En cas de retour volontaire : les frais de retour sont à la charge du client.</li>
                        </ol>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h2 className="md:text-2xl text-xl"><strong>5. Conditions de Remboursement </strong></h2>
                        <p className="sm:w-full lg:text-base">Le remboursement sera effectué sur le moyen de paiement initial dans un délai de 14 jours à compter de la réception du produit retourné, sous réserve qu’il soit en parfait état et dans son emballage d&apos;origine.</p>
                    </div>
                </article>

                <article className=" md:m-14 m-6 ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h2 className="md:text-2xl text-xl"><strong>6. Produits Non Éligibles au Retour</strong></h2>
                        <ol className="flex flex-col gap-3">
                            <li className="sm:w-full lg:text-base">- Produits personnalisés ou imprimés à la demande.</li>
                            <li className="sm:w-full lg:text-base">- Produits endommagés par une mauvaise utilisation ou entretien incorrect.</li>
                        </ol>
                    </div>
                </article>

                <article className=" md:m-14 m-6  ">
                    <div className="flex flex-col justify-center items-start gap-5 max-w-screen-lg mx-auto">
                        <h2 className="md:text-2xl text-xl"><strong>7. Contact</strong></h2>
                        <p className="sm:w-full lg:text-base">Pour toute question ou problème concernant les retours, contactez-nous <a href="/contact">ici</a>.</p>
                    </div>
                </article>

            </div>
        </section>
    )
}