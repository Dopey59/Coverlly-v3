import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import ClientNavbar from "./components/ClientNavbar"; // Importe le composant client
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Coverlly - Housse de protection pc portable",
  description: "Découvrez Coverlly, la boutique spécialisée dans les housses de protection et accessoire pour PC portable alliant style, humour subtil et designs artistiques uniques. Protégez votre ordinateur avec élégance et créativité."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`antialiased`}>
        <div className="bg-black text-white sm:p-4 p-3 flex justify-center items-center ">
          <ul className="text-wrapper">
            <li className="text-center text-base">
              🏷️ Obtenez -10% avec le code: HOHO24 | à utiliser lors de votre passage en caisse
            </li>
            {/* <li className="text-item text-base">
              🚚 Des retards sont à prévoir dans certains pays d&apos;Europe en raison des périodes de fêtes
            </li> */}
          </ul>
        </div>
        <ClientNavbar /> {/* Affiche conditionnellement la Navbar */}
        {children}
        <Analytics />
        <Footer />
      </body>
        <PrelineScript />
    </html>
  );
}
