import Link from "next/link"
import Head from 'next/head';
import "/app/globals.css";
import Image from "next/image";
import Navbar from "../../app/components/Navbar";
import PrelineScript from "../../app/components/PrelineScript";
import Mauve from "../../app/assets/images/products/pochette-protection-pc-mauve.jpg"

export default function Article2() {
    return (
        <>
        <Head>
            <title>Les 5 tendances 2024 pour les housses de PC portable - Coverlly</title>
            <meta
                name="description"
                content="Découvrez les 5 tendances incontournables pour les housses de PC portable en 2024 : couleurs pastel, matériaux écologiques, personnalisation et plus encore."
            />
            <meta name="keywords" content="housses PC 2024, tendances design, accessoires PC, Coverlly" />
            <meta name="author" content="Coverlly" />
            <meta property="og:title" content="Les 5 tendances 2024 pour les housses de PC portable - Coverlly" />
            <meta
                property="og:description"
                content="Protégez votre PC portable avec style ! Découvrez les dernières tendances en matière de housses design et fonctionnelles en 2024."
            />
            <meta property="og:image" content="../../app/assets/images/products/pochette-protection-pc-mauve.jpg" />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://www.coverlly.fr/blog/article-2" />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        {/* <!-- Blog Article --> */}
        <Navbar />
        <div className="max-w-3xl px-4 pt-16 lg:pt-20 pb-12 sm:px-6 lg:px-8 mx-auto">
            <div className="max-w-2xl">
                {/* <!-- Content --> */}
                <div className="space-y-5 md:space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold md:text-3xl">Les 5 tendances 2024 pour les housses de PC portable</h2>
                        <p className="text-lg text-gray-800">
                            En 2024, la housse de PC portable devient bien plus qu’un simple accessoire de protection. Découvrez les tendances qui marqueront cette année et trouvez celle qui correspond à votre style.
                        </p>
                    </div>

                    <figure>
                        <Image priority width={500} height={500} className="w-full object-cover rounded-xl" src={Mauve} alt="Tendances housses PC 2024" />
                        <figcaption className="mt-3 text-sm text-center text-gray-500">
                            Tendances design pour housses de PC portable en 2024 - <Link href="/produits/370680525"><span className='text-blue-500'>Collection Casual</span></Link>.
                        </figcaption>
                    </figure>
                    <br />

                    <article className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">1. Les couleurs pastel et neutres</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Douceur et simplicité</h3>
                        </div>
                        <p className="text-lg text-gray-800 my-5">
                            Les teintes pastel comme le beige, le rose poudré, et le vert sauge dominent en 2024. Ces couleurs apportent une touche minimaliste et élégante à votre équipement.
                        </p>
                    </article>
                    <br />

                    <article className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">2. Les matériaux écologiques et durables</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Protégez votre PC tout en respectant la planète</h3>
                        </div>
                        <p className="text-lg text-gray-800 my-5">
                            De plus en plus de consommateurs privilégient des housses fabriquées avec des matériaux recyclés ou écoresponsables. C’est le choix parfait pour allier style et responsabilité environnementale.
                        </p>
                    </article>
                    <br />

                    <article className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">3. La personnalisation</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Un accessoire qui vous ressemble</h3>
                        </div>
                        <p className="text-lg text-gray-800 my-5">
                            Les housses personnalisées permettent d’ajouter votre touche personnelle : nom, citations, ou illustrations uniques. Une manière originale d’exprimer votre créativité !
                        </p>
                    </article>
                    <br />

                    <article className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">4. Les motifs artistiques</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Laissez parler votre créativité</h3>
                        </div>
                        <p className="text-lg text-gray-800 my-5">
                            Des motifs abstraits, géométriques ou inspirés de l’art moderne font leur apparition sur les housses de PC. Ces designs permettent d’afficher votre originalité tout en restant élégant.
                        </p>
                    </article>
                    <br />

                    <article className="flex flex-col gap-4">
                        <div className="flex flex-col gap-4 items-start">
                            <h2 className="text-2xl font-bold md:text-3xl">5. Les formats ultra-compacts</h2>
                            <h3 className="text-xl md:text-2xl text-gray-500">Adaptés à vos déplacements</h3>
                        </div>
                        <p className="text-lg text-gray-800 my-5">
                            Avec des styles de vie de plus en plus nomades, les housses compactes et légères sont devenues indispensables. Elles sont faciles à glisser dans un sac tout en offrant une excellente protection.
                        </p>
                    </article>

                    <blockquote className="text-center p-4 sm:px-7">
                        <p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal">
                            Protégez votre ordinateur tout en restant tendance. Découvrez notre collection et laissez-vous inspirer par les designs modernes de Coverlly !
                        </p>
                    </blockquote>
                </div>
                {/* <!-- End Content --> */}
            </div>
        </div>
        {/* <!-- End Blog Article --> */}
        <PrelineScript />
        </>
    );
}