import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
      
  export function HeaderV2() {
    const words = `Shoppez votre housse d'ordinateur portable et rendez vos journées plus funs !`

    return (
      <BackgroundLines className="anim-bg flex gap-5 items-center justify-center w-full flex-col px-4">
      <h1 className="bg-clip-text text-transparent text-center bg-white text-2xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Bienvenue chez <br /> Coverlly.
      </h1>
      <h2 className="text-center">
      <TextGenerateEffect words={words} />
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-base text-neutral-100 text-center">
        Plongez dans un univers remplis d&apos;humour et de références.
      </p>
    </BackgroundLines>
  );
}