"use client"
import { useRef } from "react";
import Link from "next/link";

export default function Footer(){
  const footerRef = useRef(null); // Référence pour l'arrêt au footer
  return(
      <>
      <footer ref={footerRef} className="relative bg-black text-white py-8">
        <div className="container mx-auto px-4">
          {/* <!-- Grid container --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* <!-- Description --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">À propos de nous</h2>
              <p className="text-sm gray-100">
                Notre entreprise s&apos;engage à offrir des produits de qualité et des services d&apos;exception. Nous croyons en l&apos;innovation et en la satisfaction de nos clients.
              </p>
            </div>

            {/* <!-- Informations --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Informations</h2>
              <ul className="space-y-2">
                <li><Link href="/a-propos" className="gray-100 hover:text-white">À propos </Link></li>
                <li><Link href="/" className="gray-100 hover:text-white">Nos services </Link></li>
                {/* {/* <li><Link href="/" className="gray-100 hover:text-white">Carrières </Link></li> */}
                <li><Link href="/" className="gray-100 hover:text-white">Blog </Link></li> 
              </ul>
            </div>

            {/* <!-- Aide --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Aide</h2>
              <ul className="space-y-2">
                {/* <li><Link href="/" className="gray-100 hover:text-white">Support </Link></li> */}
                <li><Link href="/faq" className="gray-100 hover:text-white">FAQ </Link></li>
                <li><Link href="/contact" className="gray-100 hover:text-white">Contact </Link></li>   
                <li><Link href="/retour&remboursement" className="gray-100 hover:text-white">Retour & Remboursement </Link></li>
              </ul>
            </div>

            {/* <!-- Ressources --> */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Ressources</h2>
              <ul className="space-y-2">
                <li><Link href="/politique-de-confidentialite" className="gray-100 hover:text-white">Politique de confidentialité </Link></li>
                <li><Link href="/cgu" className="gray-100 hover:text-white">Conditions d&apos;utilisation </Link></li>
                {/* <li><Link href="/" className="gray-100 hover:text-white">Guides </Link></li> */}
              </ul>
            </div>
          </div>

          {/* <!-- Footer bottom --> */}
          <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-white">
            &copy; 2024 Coverlly. Tous droits réservés. Créé et développé par William.P
          </div>
        </div>
      </footer>
    </>
  )
}