import type { Metadata } from "next";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import ClientNavbar from "./components/ClientNavbar"; // Importe le composant client
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Coverlly - Housse de protection pc portable",
  description:
    "Découvrez Coverlly, la boutique spécialisée dans les housses de protection et accessoire pour PC portable alliant style, humour subtil et designs artistiques uniques. Protégez votre ordinateur avec élégance et créativité.",
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "TrAHPXccSiD-a15Mr3ezAt4QfXW3q0vFmrgzoZ8kBY8",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="">
      <body className="antialiased">
        <ClientNavbar />
        {children}
        <Analytics />
        <SpeedInsights/>
        <Footer />
        <PrelineScript /> {/* Correct placement */}
      </body>
    </html>
  );
}
