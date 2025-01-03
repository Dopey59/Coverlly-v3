import { useState } from "react";
import { copyToClipboard } from "../utils/clipboard";

export default function ClipboardExample() {
  const [text] = useState("HOHO24");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(text);
    setIsCopied(success);

    // Réinitialiser l'état après 2 secondes
    if (success) {
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <>
    <div className=" h-64 sm:my-44 my-10 flex justify-center items-center">
      <div className="sm:my-64 my-24 lg:flex-row flex flex-col lg:justify-center items-center md:gap-4 gap-6">
          <h1 className="text-zinc-800 font-bold uppercase max-md-xl sm:text-5xl text-3xl text-center text-balance">Code de réduction -10% avec HOHO24</h1>
          <button id="copy" name="copy/paste" className="flex flex-col gap-2 items-center" onClick={handleCopy}>
          <i className="icon" data-feather="clipboard"></i>
          {isCopied ? "Texte copié ✅" : ""}
        </button>
      </div>
    </div>
    </>
  );
}