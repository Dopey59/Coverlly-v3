import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ -Coverlly",
    description: "Page FAQ du site web Coverlly. Questions et réponses les plus posées sur notre site.",
  };

export default function FAQ(){
    return(
        <>
        {/* <!-- FAQ --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Questions/Réponses</h2>
            <p className="mt-1 text-gray-600">Liste des questions les plus fréquentes</p>
        </div>
        {/* <!-- End Title --> */}

        <div className="max-w-2xl mx-auto">
            {/* <!-- Accordion --> */}
            <div className="hs-accordion-group">
            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                1. Quels types de housses proposez-vous ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p className="text-gray-800">
                Nous proposons une large gamme de housses pour ordinateurs portables, alliant style, protection et fonctionnalité. Nos housses sont disponibles dans différentes tailles pour s’adapter à la plupart des modèles d’ordinateurs portables, et comprennent des designs uniques et personnalisables.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
                2. Comment choisir la bonne taille pour ma housse ?                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                <p className="text-gray-800">
                Pour choisir la taille idéale, mesurez votre ordinateur portable (largeur, longueur et épaisseur) et comparez avec les dimensions indiquées dans les descriptions de nos produits. Si vous avez un doute, contactez-nous à [email professionnel] pour obtenir de l&apos;aide.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
                3. Proposez-vous des produits personnalisables ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                <p className="text-gray-800">

                Oui, certaines de nos housses peuvent être personnalisées avec des designs uniques, des couleurs ou des textes. Vous trouverez les options de personnalisation disponibles directement sur les pages produits concernées.                </p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-four">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
                4. Quels sont les délais de livraison ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
                    <p className="text-gray-800">Les délais de livraison varient en fonction de votre localisation, des périodes de fêtes etc..</p>
                    <br />
                    <ol>
                        <li><strong>Produits standards :</strong> 2 à 7 jours ouvrés.</li>
                    </ol>
                    <br />
                    <p className="text-gray-800">Une fois votre commande expédiée, vous recevrez un e-mail de confirmation avec un lien de suivi.</p>

                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-five">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
                5. Quels sont les frais de livraison ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
                <p className="text-gray-800">Les frais de livraison sont calculés en fonction de votre localisation et du poids de votre commande. Vous pouvez consulter les frais exacts lors du passage à la caisse avant de confirmer votre commande.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                6. Puis-je retourner un produit ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">Oui, les retours sont possibles sous certaines conditions :</p>
                    <br />
                    <ol>
                        <li><strong>Produits non personnalisés :</strong> retour possible dans les 14 jours suivant la réception, sous réserve qu’ils soient dans leur état d&apos;origine.</li>
                        <br />
                        <li><strong>Produits défectueux ou erreurs de commande : </strong>contactez-nous dans les 7 jours suivant la réception pour organiser un remplacement ou un remboursement.
                        Pour plus de détails, consultez notre Politique de Retour.</li>
                    </ol>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                7. Que faire si je reçois un produit défectueux ou incorrect ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">En cas de produit défectueux ou incorrect, veuillez nous contacter à la rubrique de notre site web <a href="/contact" className="text-underline font-bold">contact</a> avec les détails de votre commande et des photos du problème rencontré. Nous nous efforcerons de résoudre le problème rapidement.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                8. Proposez-vous des cartes-cadeaux ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">Pas pour l&apos;instant, nous proposerons des cartes-cadeaux d&apos;un montant personnalisable dans une future mise à jour. Elles seront parfaites pour offrir un cadeau sans se tromper. Vous pourrez les commander directement sur notre site.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                9. Comment puis-je suivre ma commande ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">Une fois votre commande expédiée, vous recevrez un e-mail avec un lien de suivi. Vous pouvez également suivre votre commande sur notre site, juste <a className="font-bolf text-rose-300" href="/suivi-de-commande">ici</a>.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                10. Quels moyens de paiement acceptez-vous ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">Nous acceptons les principaux moyens de paiement :</p>
                    <br />
                    <ol>
                        <li>- Cartes de crédit et de débit (Visa, Mastercard, etc.)</li>
                        <li>- PayPal </li>
                        <li>- Apple Pay / Google Pay </li>
                    </ol>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                11. Vos produits sont-ils écoresponsables ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">
                    Nous faisons de notre mieux pour proposer des produits de qualité tout en minimisant notre impact environnemental. Certains de nos produits sont fabriqués à partir de matériaux recyclés ou respectueux de l&apos;environnement.
                    De plus, les méthodes de productions ne fonctionne que sur commande ! Nous frabriquons les housses personnalisées spécialement pour vous en somme.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                12. Puis-je modifier ou annuler ma commande ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">
                    Vous pouvez modifier ou annuler votre commande tant qu’elle n’a pas encore été traitée. Pour ce faire, contactez-nous rapidement à [email professionnel] avec votre numéro de commande.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                13. Livrez-vous à l’international ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">
                    Pas pour l&apos;instant, nous livrons partout en Europe pour le moment. Les frais et délais de livraison varient selon la destination. Consultez les informations lors du passage à la caisse pour plus de précisions.</p>
                </div>
            </div>

            <div className="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-six">
                <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
                14. Comment puis-je vous contacter ?
                <svg className="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                <svg className="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
                    <p className="text-gray-800">Vous pouvez nous contacter par e-mail, directement dans la rubrique <a href="/contact" className="text-underline font-bold">contact</a>. Nous nous engageons à vous répondre dans les plus brefs délais. Si vous avez d&apos;autres questions, n&apos;hésitez pas à nous contacter !</p>
                </div>
            </div>
            </div>
            {/* <!-- End Accordion --> */}
        </div>
        </div>
        {/* <!-- End FAQ --> */}
        </>
    )
}