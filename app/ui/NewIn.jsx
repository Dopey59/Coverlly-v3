import Image from "next/image"
import Link from "next/link"
import Emeraude from '../assets/images/products/emeraude.jpg'

export default function NewIn(){
    return(
        <>
        <section>
            <div className="relative sm:mt-44 w-auto mt-10">
                <div className="relative xl:flex-row max-w-md-screen flex flex-col xl:justify-evenly items-center md:p-10 sm:gap-0 gap-1 ">
                    <div className="bg-gray-100 max-w-screen-2xl sm:p-14 p-3">
                        <div className="flex items-start mx-4 flex-col max-w-xl gap-5">
                            <h1 className="text-3xl sm:text-6xl font-black">Jardin d'Art</h1>
                            <h3 className="text-xl text-gray-500">- Découvrez notre catégorie fleurale de la semaine</h3>
                            <div className="text-base text-balance">
                                <p className="text-pretty">Chez Coverlly, on aime vous surprendre avec des designs décalés, mais on sait aussi mettre les mains dans la terre pour
                                cultiver des classiques.
                                <br /><br /> Notre collection "Jardin d’Art" vous transporte dans un univers où les fleurs prennent racine dans l’élégance et la poésie.
                                 Des motifs inspirés de l’artisanat d’antan, des jardins luxuriants et de la beauté intemporelle…
                                 Comme quoi, on sait rester sérieux.
                                 <br /><br />Parfois. <br /><br />
                                Mais attention, faut pas pousser mémé dans les orties : ici, le style est soigné, les finitions impeccables
                                et chaque housse est une petite œuvre d’art à emporter partout. Parce que même en terrain fleuri, Coverlly garde la main verte…</p>
                            </div>
                            <Link 
                            className="border-black border-2 p-2 rounded duration-500 hover:duration-300 ease-in-out
                            transition hover:bg-black hover:text-white w-44 text-center"
                            href="/produits/categorie/jardin-d-art">
                             Découvrir
                            </Link>
                        </div>
                    </div>
                    <Image className="rounded-xl" alt="" width={800} height={800} src={Emeraude}/>
                </div>
            </div>
        </section>
        </>
    )
}