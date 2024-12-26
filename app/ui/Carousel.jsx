import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Pagination } from "swiper/modules"; // Import des modules nécessaires
import { useState } from "react";
import Mauve from '../../app/assets/images/products/pochette-protection-pc-mauve.jpg'
import "swiper/swiper-bundle.css"; // Styles essentiels pour Swiper

export default function BlogCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // État pour le carrousel des miniatures

  return (
    <div className="max-w-[130vh] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col sm:gap-2 gap-4 py-5">
        <h1 className="lg:text-7xl text-6xl font-bold text-zinc-800 ">Articles de  <span className='anim-text'>blogs</span></h1>
        <h2 className="text-base text-gray-500 ">Apprenez-en d&apos;avantages sur nos méthodes de confection, nos articles et bien plus encore !
        </h2>
      </div>
      {/* Carrousel principal */}
      <Swiper
        modules={[Thumbs, Pagination]}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        style={{ marginBottom: "20px" }}
      >
         <SwiperSlide>
          <Link className="group relative block rounded-xl focus:outline-none" href="/blog/article-4">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[550px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={900}
                height={900}
                className="size-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1443916568596-df5a58c445e9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                  Vous adorez nos housse et voici pourquoi {">"}
                </h3>
                <p className="mt-2 text-white/80">Voici pourquoi vous aimez nos accessoires</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="group relative block rounded-xl focus:outline-none" href="/blog/article-1">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[550px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={900}
                height={900}
                className="size-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1675668409245-955188b96bf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                 Bien choisir sa housse d&apos;ordinateur {">"}
                </h3>
                <p className="mt-2 text-white/80">Les critères importants</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="group relative block rounded-xl focus:outline-none" href="/blog/article-2">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[550px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={900}
                height={900}
                className="size-full absolute top-0 start-0 object-cover"
                src={Mauve}
                alt="Blog Image"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                  Les conseils pour suivre la tendance {">"}
                </h3>
                <p className="mt-2 text-white/80">Tendances 2024</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="group relative block rounded-xl focus:outline-none" href="/blog/article-3">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[550px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={900}
                height={900}
                className="size-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1496240419284-b6ee90d2e6ff?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                  5 raisons d&apos;opter pour une housse {">"}
                </h3>
                <p className="mt-2 text-white/80">La housse d&apos;ordinateur, aussi pratique que stylée !</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link className="group relative block rounded-xl focus:outline-none" href="/fabrication">
            <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[550px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <Image
                width={900}
                height={900}
                className="size-full absolute top-0 start-0 object-cover"
                src="https://images.unsplash.com/photo-1663433541063-ddab084d1126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Blog Image"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                  Les coulisses de Coverlly {">"}
                </h3>
                <p className="mt-2 text-white/80">Nos méthodes de fabrication</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      {/* Carrousel des miniatures */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3} // 3 miniatures visibles par défaut
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[100px] rounded-lg overflow-hidden">
            <Image
              width={900}
              height={900}
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1443916568596-df5a58c445e9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Thumbnail 1"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[100px] rounded-lg overflow-hidden">
            <Image
              width={900}
              height={900}
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1675668409245-955188b96bf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Thumbnail 2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[100px] rounded-lg overflow-hidden">
            <Image
              width={900}
              height={900}
              className="size-full object-cover"
              src={Mauve}
              alt="Thumbnail 2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[100px] rounded-lg overflow-hidden">
            <Image
              width={900}
              height={900}
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1496240419284-b6ee90d2e6ff?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Thumbnail 2"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[100px] rounded-lg overflow-hidden">
            <Image
              width={900}
              height={900}
              className="size-full object-cover"
              src="https://images.unsplash.com/photo-1663433541063-ddab084d1126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Thumbnail 2"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
