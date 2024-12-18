"use client"
import Pov1 from '../assets/images/products/pov1.png';
import Image from 'next/image'
import Link from 'next/link';

export default function MadeWithLove(){
    return(
    <>
    <section className="w-full sm:mt-44 mt-10">
        <article className="grid md:grid-cols-2">
            <div className="">
                <Image priority className=" drop-shadow-2xl" src={Pov1} alt="image housse de protection - pc portable"/>
            </div>
            <div className="p-3 flex flex-col lg:gap-16 gap-10 justify-center items-center ">
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-4">
                        <h1 className="lg:text-7xl text-6xl font-black uppercase">Conçues avec amour</h1>
                    </div>
                </div>
                <div className="flex flex-col rounded-xl shadow-2xl backdrop-blur-md bg-white p-6 gap-5 max-w-screen-md mx-auto">
                    <h2 className="text-2xl md:text-3xl font-black">Des pochettes remplies d&apos;humour et d&apos;originalité !</h2>
                    <p className=" font-regular sm:w-full leading-relaxed lg:text-lg">Parce qu’un ordinateur heureux est un ordinateur bien protégé ! Grâce à sa double fourrure intérieure, notre housse est là pour absorber
                        les chocs et les éraflures. Plus besoin de stresser pour les petits accidents – votre ordinateur vit sa meilleure vie,
                        bien au chaud et au sec. Un essentiel de protection ? Oui ! Mais aussi un accessoire stylé qui vous accompagne
                        partout avec classe.</p>
                    <div>
                        <Link href="/a-propos">
                            <button className="bg-black rounded p-2 text-white transition ease-in-out hover:duration-500 hover:bg-rose-300">En savoir plus</button>
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    </section>
    </>
    )
}