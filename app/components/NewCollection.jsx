"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules"; // Modules nécessaires
import "swiper/swiper-bundle.css"; // Styles essentiels pour Swiper
import Patron from '../assets/images/products/patron.webp';
import Vivement from "../assets/images/products/vivement.webp";
import Flemme from '../assets/images/products/flemme.webp';
import Lundi from '../assets/images/products/lundi.webp';
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
     <h1 className="lg:text-6xl text-4xl font-bold text-zinc-800 mx-4">Nouveautés de la <span className='anim-text'>semaine</span></h1>
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
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
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
            <Link href="/produits/370773182">
                <Image
                src={Patron}
                alt="Image produit 1"
                width={500}
                height={500}
                placeholder="blur" // Pour le chargement progressif (optionnel)
                />
            </Link>
                <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">BONJOUR PATRON</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370773008">
                <Image
                src={Vivement}
                alt="Image produit 2"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Vivement 17H30</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370772451">
                <Image
                src={Flemme}
                alt="Image produit 3"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">AUJOURD&apos;HUI FLEMME</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/370772161">
                <Image
                src={Lundi}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 uppercase xl:bottom-5 text-base font-medium">OH SHIT</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}