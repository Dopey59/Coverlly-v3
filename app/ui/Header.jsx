"use client"
import Image from 'next/image'
import ScrollElement from '../assets/images/elements/element6.png';
import Cloud from '../assets/images/elements/pinkCloud.png';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react'

gsap.registerPlugin(useGSAP, ScrollTrigger); 

export default function Header(){

useEffect(() => {
  console.log("GSAP animations initialisées"); 
    gsap.from(".grp2", {
      opacity: 1,
      y: 20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: true,
        trigger: "#pin-windmill",
        start: "50% 50%",
        endTrigger: "#pin-windmill-wrap",
        end: "bottom -100%",
      },
    });

    tl.to("#pin-windmill", { rotateZ: 900 });
  }, []); // Exécute uniquement côté client après le rendu initial.

  return(
  <>
  <section className="bg-black flex justify-center h-96 w-auto m-auto">
    <div className="scrollEffect flex justify-end  absolute w-full bottom-0 ">
      <Image id="pin-windmill" className=" grp2 sm:w-32 lg:h-auto w-24 z-50" src={ScrollElement} alt="element graphique"/>
    </div>
    <article className="header justify-center items-center flex flex-col ">
      <div className="title flex justify-center items-center">
        <div className="absolute z-50">
          <h1 className="ele1 flex items-center mt-6 md:text-9xl text-7xl header font-black drop-shadow-xl text-white">
            <span className="ele1">C</span><span className="ele1">o</span><span className="ele1">v</span><span>e</span><span>r</span><span>l</span><span>l</span><span>y</span>
          </h1>
        </div>
        <div className="svgCloud">
          <Image priority src={Cloud} alt="" className="grp2" data-speed="0.8" />
        </div>
      </div>
    </article>
  </section>
  </>
  )
}