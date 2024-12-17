"use client"
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Autoplay } from "swiper/modules"; // Modules nécessaires
import "swiper/swiper-bundle.css"; // Styles essentiels pour Swiper
import Money from '../assets/images/products/noel13.png';
import Tiger from "../assets/images/products/buttertiger.png";
import Butterfly from '../assets/images/products/butterfly.png';
import RoueLibre from '../assets/images/products/roue-libre.webp';
import Fish from '../assets/images/products/fish.png';
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
     <div className="relative h-4 flex justify-center md:block md:mx-4 my-10 sm:mt-24 mt-10">
        <h1 className="animated-text sm:text-5xl uppercase text-3xl text-center font-black w-fit rounded">Quel housse est faite pour toi ?</h1>
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
          spaceBetween: 0,
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
            <Link href="/produits/368475602">
                <Image
                src={Tiger}
                alt="Image produit 1"
                width={500}
                height={500}
                placeholder="blur" // Pour le chargement progressif (optionnel)
                />
            </Link>
                <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Eyes Of Tiger</h1>
            </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/368475504">
                <Image
                src={Butterfly}
                alt="Image produit 2"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Butt Erfly</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/369868064">
                <Image
                src={Money}
                alt="Image produit 3"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base  font-medium">Money Winter</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/369866023">
                <Image
                src={RoueLibre}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 uppercase xl:bottom-5 text-base font-medium">En Roue Libre</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="flex items-center justify-center" data-swiper-parallax="-200">
          <Link href="/produits/369866571">
                <Image
                src={Fish}
                alt="Image produit 4"
                width={500}
                height={500}
                placeholder="blur"
                />
          </Link>
            <h1 placeholder="blur" className="absolute bottom-5 md:bottom-10 xl:bottom-5 uppercase text-base font-medium">On S&apos;en Fish</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}