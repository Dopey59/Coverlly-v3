import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules"; // Import des modules nécessaires
import "swiper/swiper-bundle.css"; // Styles essentiels pour Swiper
import Money from '../assets/images/products/noel13.png';
import Tiger from "../assets/images/products/buttertiger.png";
import Butterfly from '../assets/images/products/butterfly.png';
import RoueLibre from '../assets/images/products/roue-libre.webp';
import Fish from '../assets/images/products/fish.png';




export default function CarouselV2() {
  return (
    <>
     <div className="w-full flex justify-center md:block md:mx-4 py-6">
        <h1 className="lg:text-7xl md:my-8 my-10 sm:text-5xl uppercase text-4xl font-black bg-black text-white p-2 w-fit rounded">Idées pour offrir</h1>
     </div>
    <div className="h-auto relative w-full flex justify-center items-center ">
      {/* Parallax Background */}
      <div
        className="swiper-parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1628573255381-e1b7712b5ba0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Remplace par ton image de fond
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        data-swiper-parallax="-20%"
      >
      </div>

      <Swiper
        modules={[Parallax, Pagination, Autoplay]} // Modules nécessaires
        parallax={true} // Active l'effet Parallax
        grabCursor={true} // UX améliorée
        centeredSlides={true} // Slide active centrée
        slidesPerView="auto" // Affiche plusieurs slides
        autoplay={{
          delay: 2500, // Temps entre les slides
          disableOnInteraction: false, // Continue l'autoplay après interaction
        }}
        pagination={{
          clickable: true, // Pagination interactive
        }}
        breakpoints={{
          // Breakpoints pour responsive
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Slides */}
        <SwiperSlide className="p-4">
          <div className="flex flex-col items-center bg-gray-200/60 rounded-xl gap-3" data-swiper-parallax="-200">
            <Link href="/produits/368475602">
                <Image
                src={Tiger}
                alt="Image produit 1"
                width={500}
                height={500}
                placeholder="blur" // Pour le chargement progressif (optionnel)
                />
            </Link>
                <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 text-2xl  font-medium">Eyes Of Tiger</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide className="p-4">
          <div className="flex flex-col items-center bg-gray-200/60 rounded-xl gap-3" data-swiper-parallax="-200">
          <Link href="/produits/368475504">
                <Image
                src={Butterfly}
                alt="Image produit 2"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 text-2xl  font-medium">Butt Erfly</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="p-4">
          <div className="flex flex-col items-center bg-gray-200/60 rounded-xl gap-3" data-swiper-parallax="-200">
          <Link href="/produits/369868064">
                <Image
                src={Money}
                alt="Image produit 3"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 text-2xl  font-medium">Money Winter</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="p-4">
          <div className="flex flex-col items-center bg-gray-200/60 rounded-xl gap-3" data-swiper-parallax="-200">
          <Link href="/produits/369866023">
                <Image
                src={RoueLibre}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 text-2xl  font-medium">En Roue Libre</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="p-4">
          <div className="flex flex-col items-center bg-gray-200/60 rounded-xl gap-3" data-swiper-parallax="-200">
          <Link href="/produits/369866571">
                <Image
                src={Fish}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 text-2xl  font-medium">On S&apos;en Fish</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}