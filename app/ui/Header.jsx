"use client";
import Image from "next/image";
// import ScrollElement from "../assets/images/elements/element6.png";
import Cloud from "../assets/images/elements/pinkCloud.png";
import '/app/globals.css'

import { gsap } from "gsap";
import { useEffect } from "react";

// Enregistre ScrollTrigger uniquement côté client


export default function Header() {
  useEffect(() => {
    console.log("GSAP animations initialisées");

    // Animation flottante (yoyo)
    const floatAnimation = gsap.fromTo(
      ".grp2",
      { opacity: 1, y: 20 },
      {
        y: 0,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );


    // Nettoyage des animations pour éviter les conflits
    return () => {
      floatAnimation.kill();
    };
  }, []); // Exécute uniquement côté client après le rendu initial.

  return (
    <>
      <section className="flex justify-center anim-bg h-96" >
        {/* Élément flottant */}
        {/* <div className="scrollEffect flex justify-end absolute w-full bottom-0">
          <Image
            id="pin-windmill"
            className="grp2 sm:w-32 lg:h-auto w-24 z-50"
            src={ScrollElement}
            alt="element graphique"
          />
        </div> */}

        {/* Titre principal */}
        <article className="header justify-center items-center flex flex-col">
          <div className="title flex justify-center items-center">
            <div className="absolute z-50">
              <h1 className="ele1 flex items-center mt-6 md:text-9xl text-7xl header font-black drop-shadow-xl text-white">
                <span>C</span>
                <span>o</span>
                <span>v</span>
                <span>e</span>
                <span>r</span>
                <span>l</span>
                <span>l</span>
                <span>y</span>
              </h1>
            </div>
            <div className="svgCloud">
              <Image priority src={Cloud} alt="" className="grp2" />
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
