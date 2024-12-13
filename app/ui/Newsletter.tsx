"use client";

import { PlaceholdersAndVanishInput } from "../components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "exemple@gmail.com",
    "Wouah votre site est chouette !",
    "Nouveaux arrivages par mail",
    "Promotions, soldes..",
    "Que des infos utiles, pas de spams !",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

 
  return (
    <div className="md:h-[30rem] h-96 flex flex-col justify-center  items-center px-4">
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        Rejoins nous et reçois les nouvelles offres par e-mail.
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
