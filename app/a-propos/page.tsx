import Logo from '../assets/images/elements/coverlly.png'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "A propos - Coverlly",
    description: "Coverlly est une entreprise revisitant de manière humoristique les accessoires de bureautique - ordinateur, de façon originale et fun."
  };

export default function About(){
    return(
        <>
        {/* <!-- Blog Article --> */}
        <div className="max-w-3xl px-4 pt-14 lg:pt-20 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-2xl">
                {/* <!-- Content --> */}
                <div className="space-y-5 md:space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">À propos de Coverlly</h2>

                        <p className="text-lg text-gray-800">
                        Bienvenue dans l’univers de Coverlly, où les housses pour ordinateurs portables deviennent bien plus qu’un simple accessoire : un élément de style, une protection de confiance et une petite touche de personnalité qui fait toute la différence. Mais avant tout, laissez-nous vous raconter notre histoire.
                        </p>
                    </div>

                    <figure>
                        <Image className="w-full object-cover rounded-xl" src={Logo} alt="Blog Image"/>
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Logo de Coverlly.
                        </figcaption>
                    </figure>
                    <h2 className="text-2xl font-bold md:text-3xl">L’idée derrière Coverlly</h2>

                    <p className="text-lg text-gray-800">Coverlly, c’est avant tout le projet passionné d’une seule personne, avec une vision claire : rendre les choses simples, efficaces et amusantes. Dans un monde rempli de comptes, de mots de passe oubliés et d’inscriptions interminables, nous avons choisi de faire un grand pas de côté.</p>

                    <p className="text-lg text-gray-800">Pas de compte utilisateur chez nous. Pourquoi ? Parce que nous pensons que le temps de nos clients est précieux. Pas besoin de s’inscrire, de se connecter ou de se perdre dans des formulaires sans fin. Chez Coverlly, votre navigation est fluide, rapide et sans accroc. Notre philosophie : éviter les obstacles inutiles et aller droit au but, comme une housse qui s’ajuste parfaitement à votre ordinateur.</p>


                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">Une ambiance familiale et fun</h2>
                    </div>

                    <ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800">
                        <li className="ps-2">Derrière Coverlly, il n’y a pas une équipe de 100 personnes ni une salle de brainstorming pleine de post-its multicolores. Non, il y a une seule personne, mais avec une tonne de passion et une bonne dose d’humour.</li>
                        <li className="ps-2">Coverlly casse les codes des sites web classiques avec une approche chaleureuse et conviviale. Ici, on ne se prend pas trop au sérieux (sauf pour la qualité de nos produits et services). L’idée, c’est de vous faire sentir à l’aise, comme si vous passiez un moment avec un ami qui a bon goût en housses pour PC portable.</li>
                    </ul>

                    <h2 className="text-2xl font-bold md:text-3xl">Une mission claire</h2>
                    <p className="text-lg text-gray-800">Notre mission est simple : vous proposer des housses qui protègent vos ordinateurs avec style et durabilité, sans sacrifier votre expérience utilisateur. Chaque produit est soigneusement sélectionné ou conçu pour correspondre à nos valeurs : qualité, esthétique et praticité.</p>
                    <p className="text-lg text-gray-800">Nous voulons que Coverlly soit plus qu’un site e-commerce. Nous voulons créer une petite parenthèse de simplicité et de sourire dans votre journée. Après tout, pourquoi choisir entre la fonctionnalité et le fun ?</p>
                    
                    <h2 className="text-2xl font-bold md:text-3xl">Et vous, dans tout ça ?</h2>
                    <p className="text-lg text-gray-800">Vous êtes au centre de tout ce que nous faisons. Votre expérience compte plus que tout. Si nous avons choisi de simplifier l’utilisation du site, c’est parce que nous savons que vous avez autre chose à faire que de remplir des formulaires. L’idée, c’est de vous permettre de passer plus de temps à profiter de votre nouveau compagnon pour ordinateur qu’à essayer de comprendre comment passer commande.</p>
                    
                    <h2 className="text-2xl font-bold md:text-3xl">En Conclusion</h2>
                    <p className="text-lg text-gray-800">Chez Coverlly, nous croyons que chaque client devrait se sentir à l’aise, comme à la maison (mais avec une connexion Internet rapide). Nous avons le souci du détail, un brin d’humour et beaucoup d’envie de bien faire. Alors, bienvenue dans notre petite famille. On espère que vous trouverez ici la housse qui vous fera sourire chaque fois que vous sortirez votre ordinateur.</p>
                    
                    <blockquote className="text-center p-4 sm:px-7">
                        <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                        Merci de faire partie de l’aventure Coverlly.
                        </p>
                        <p className="mt-5 text-gray-800">
                        Et souvenez-vous, ici, tout est simple, rapide et un peu plus fun !
                        </p>
                    </blockquote>
                    <div>
                        <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                        Accessoire
                        </p>
                        <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                        Fun
                        </p>
                        <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                        Humoristique
                        </p>
                        <p className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                        Familliale
                        </p>
                    </div>
                   
                </div>
                {/* <!-- End Content --> */}
            </div>
        </div>
        {/* <!-- End Blog Article --> */}

</>
    )
}