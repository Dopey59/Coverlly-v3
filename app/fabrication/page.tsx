// import Link from "next/link"
import Image from "next/image"
import Logo from '../assets/images/elements/coverlly.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "A propos - Coverlly",
    description: "Coverlly est une entreprise revisitant de manière humoristique les accessoires de bureautique - ordinateur, de façon originale et fun."
  };
export default function Fabrication() {
    return(
    <>
    {/* <!-- Blog Article --> */}
    <div className="max-w-3xl px-4 pt-16 lg:pt-20 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-2xl">
                {/* <!-- Content --> */}
                <div className="space-y-5 md:space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">Une Fabrication Responsable et une Qualité Irréprochable</h2>
                        <p className="text-lg text-gray-800">
                        Chez Coverlly, nous ne faisons aucun compromis sur la qualité. Chaque housse est créée pour durer, avec un design unique et une technologie d’impression à la pointe. En collaborant avec Printful, un leader mondial de l’impression à la demande, nous garantissons des produits fiables, écologiques et esthétiques.
                        </p>
                    </div>

                    <figure>
                        <Image width={500} height={500} className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1663433567177-9f94be0bff4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Processus de fabrication"/>
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Exemple d&apos;une Impression à chaud.
                        </figcaption>
                    </figure>

                    <article className="Methodes-Impression flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">1. Nos Méthodes d’Impression</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Des procédés modernes pour une qualité maximale</h3>
                        </div>

                        <div className="subtitle">
                            <span className="font-medium list-outside space-y-5 ps-5 text-lg text-gray-800">Avantages :</span>
                        </div>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <li className="ps-2">Couleurs éclatantes et riches.</li>
                            <li className="ps-2">Excellente tenue au lavage.</li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Processus :</span>
                            <li className="ps-2">
                            L’impression DTG (Direct To Garment) utilise une encre spéciale injectée directement dans le tissu. Cette méthode permet de créer des designs détaillés, parfaits pour des motifs complexes ou colorés.
                            </li>
                        </ul>

                        <ul className="list-disc list-outside flex flex-col space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Sublimation (si applicable)</span>
                            <span className="font-medium">Avantages :</span>
                            <li className="ps-2">Impression homogène sur toute la surface.</li>
                            <li className="ps-2">Couleurs profondes qui ne s’effacent pas.
                            </li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Processus :</span>
                            <li className="ps-2">
                            La sublimation est un processus où l’encre est transformée en gaz sous chaleur pour fusionner avec le matériau. Cette méthode assure une impression parfaite, sans craquelures ni défauts.                        </li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Engagement qualité :</span>
                            <li className="ps-2">
                            Peu importe la méthode utilisée, chaque produit est soumis à des contrôles rigoureux avant expédition pour garantir une qualité constante.</li>
                        </ul>
                    </article>

                   <article className="Methodes-Impression flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">2. L’Engagement Écologique</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Moins de gaspillage, plus de respect pour la planète</h3>
                        </div>

                        <figure>
                            <Image width={500} height={500} className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1517060498689-c7444779f1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Production écologique"/>
                            <figcaption className="mt-3 text-sm text-center text-gray-500">
                                Notre engagement écologique.
                            </figcaption>
                        </figure>

                        <div className="subtitle">
                            <span className="font-medium list-outside space-y-5 ps-5 text-lg text-gray-800">Fabrication à la demande :</span>
                        </div>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <li className="ps-2">Chez Coverlly, chaque produit est imprimé uniquement lorsqu’une commande est passée. Cela permet de réduire le gaspillage et de limiter les stocks inutiles.</li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Utilisation d’encres certifiées :</span>
                            <li className="ps-2">
                            Les encres utilisées par Printful sont non toxiques et respectent les normes environnementales strictes (certifications Oeko-Tex).</li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Économie de ressources :</span>
                            <li className="ps-2">
                            Grâce à des procédés optimisés, la consommation d’eau et d’énergie est significativement réduite.</li>
                        </ul>
                    </article>

                    <article className="Methodes-Impression flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">3. Une Expertise Reconnue</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Printful, votre garantie de fiabilité</h3>
                        </div>

                        <figure>
                            <Image width={500} height={500} className="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Printful, partenaire fiable"/>
                            <figcaption className="mt-3 text-sm text-center text-gray-500">
                                Un partenaire fiable, reconnue dans le monde entier.
                            </figcaption>
                        </figure>

                        <div className="subtitle">
                            <span className="font-medium  list-outside space-y-5 ps-5 text-lg text-gray-800">Une entreprise mondiale :</span>
                        </div>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <li className="ps-2">Depuis 2013, Printful s’est imposé comme un acteur majeur de l’impression à la demande, avec plus de 40 millions de produits fabriqués et expédiés à travers le monde.</li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Qualité constante :</span>
                            <li className="ps-2">
                            Grâce à leurs installations modernes situées en Europe et aux États-Unis, Printful garantit une qualité et des délais de livraison optimaux.
                            </li>
                        </ul>
                    </article>

                    <article className="Methodes-Impression flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">4. Pourquoi Choisir Coverlly ?</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Un produit pensé pour vous, fabriqué avec soin</h3>
                        </div>


                        <div className="subtitle">
                            <span className="font-medium  list-outside space-y-5 ps-5 text-lg text-gray-800">Design unique et fonctionnel :</span>
                        </div>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <li className="ps-2">Chaque housse est conçue pour protéger votre PC tout en reflétant votre style personnel.</li>
                        </ul>

                        <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                            <span className="font-medium">Satisfaction garantie :</span>
                            <li className="ps-2">
                            Nos produits sont faits pour durer, et nous sommes toujours à l’écoute de vos retours pour garantir une expérience exceptionnelle.
                            </li>
                        </ul>
                    </article>

                    <figure>
                        <Image className="w-full object-cover rounded-xl" src={Logo} alt="Logo Coverlly"/>
                    </figure>                 
                    <blockquote className="text-center p-4 sm:px-7">
                        <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                        Faites confiance à Coverlly pour vous offrir des housses de qualité supérieure, conçues avec amour et responsabilité. Découvrez notre collection et laissez-vous séduire !
                        </p>
                    </blockquote>
                </div>
                {/* <!-- End Content --> */}
            </div>
        </div>
        {/* <!-- End Blog Article --> */}
    </>
    )
}