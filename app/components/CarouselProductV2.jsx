"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules"; // Modules nécessaires
import "swiper/swiper-bundle.css"; // Styles essentiels pour Swiper
import Vert from '../assets/images/products/copenhague.webp';
import Bordeaux from "../assets/images/products/bordeaux.webp";
import Capucine from '../assets/images/products/capucine.webp';
import Indigo from '../assets/images/products/indigo.webp';
import Mauve from '../assets/images/products/mauve.webp';
import Noir from '../assets/images/products/noir.webp';

import { useEffect } from 'react';
import gsap from 'gsap';

export default function CarouselV2() {
  useEffect(() => {
    const text = document.querySelector('.animated-text');
    const letters = text.textContent.split('');

    text.innerHTML = letters.map((letter) => `<span>${letter}</span>`).join('');

    gsap.fromTo(
      text.querySelectorAll('span'),
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.05,
      }
    );
  }, []);

  return (
    <>
     <div className="relative h-4 flex justify-center md:block md:mx-4 sm:my-24 my-10">
     <h1 className="animated-text md:text-6xl text-4xl font-bold text-zinc-800 ">Quel housse est faite pour  <span className='anim-text'>Toi</span> ?</h1>
     </div>
     <Swiper
      modules={[EffectCards, Pagination, Autoplay]} // Modules nécessaires pour l'effet Cards
      effect="" // Active l'effet Cards
      grabCursor={true} // UX améliorée
      autoplay={{
        delay: 2500, // Temps entre les slides
        disableOnInteraction: false, // Continue l'autoplay après interaction
      }}
      pagination={{
        clickable: true, // Pagination interactive
      }}
      breakpoints={{
        // Configuration des espaces et comportements selon la taille de l'écran
        350: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView:  2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      style={{ position: "relative", zIndex: 1, padding: "14px", paddingBottom: "50px",}}
    >
        {/* Slides */}
        
        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
            <Link href="/produits/370680525">
                <Image
                src={Mauve}
                alt="Image produit 1"
                width={500}
                height={500}
                placeholder="blur" // Pour le chargement progressif (optionnel)
                />
            </Link>
                <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Casual Mauve</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370680540">
                <Image
                src={Indigo}
                alt="Image produit 2"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Casual Indigo</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370680773">
                <Image
                src={Vert}
                alt="Image produit 3"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Casual Copenhague</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370680819">
                <Image
                src={Capucine}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 uppercase xl:bottom-5 text-base font-medium">Casual Capucine</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370680555">
                <Image
                src={Bordeaux}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base font-medium">Casual Bordeaux</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370680563">
                <Image
                src={Noir}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base font-medium">Casual Black</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}