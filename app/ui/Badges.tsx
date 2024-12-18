'use client'
import feather from "feather-icons";
import { useEffect } from "react";

export default function Badges(){

    useEffect(() => {
    feather.replace(); // Remplace les éléments <i data-feather="icon-name"> par des SVG
    }, []);

    return(
    <>
    {/* <!-- Icon Blocks --> */}
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto md:mt-44 mt-14">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 sm:bg-gray-100 p-10 rounded-xl">
        {/* <!-- Icon Block --> */}
        <div className="flex flex-col justify-center items-center text-center">
            <i data-feather="credit-card"></i> {/* Remplacé automatiquement par le SVG de "book" */}
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
                <div className="bg-gray-400 w-4 h-0.5"></div>
            </div>
            <div className="mt-5">
                <h1 className="text-lg font-semibold text-gray-800">Paiement Sécurisé</h1>
                <p className="mt-1 text-gray-600">Visa, MasterCard, Google Pay... </p>
            </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="flex flex-col justify-center items-center text-center">
            <i data-feather="truck"></i> {/* Remplacé automatiquement par le SVG de "book" */}
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
                <div className="bg-gray-400 w-4 h-0.5"></div>
            </div>
            <div className="mt-5">
                <h1 className="text-lg font-semibold text-gray-800">Livraison Rapide</h1>
                <p className="mt-1 text-gray-600">2 à 5 jours ouvrés</p>
            </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="flex flex-col justify-center items-center text-center">
            <i data-feather="feather"></i> {/* Remplacé automatiquement par le SVG de "book" */}
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
                <div className="bg-gray-400 w-4 h-0.5"></div>
            </div>
            <div className="mt-5">
                <h1 className="text-lg font-semibold text-gray-800">Eco-Friendly</h1>
                <p className="mt-1 text-gray-600">Production à la commande </p>
            </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div className="flex flex-col justify-center items-center text-center">
            <svg className="shrink-0 size-9 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
            <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-transparent h-0.5 mt-6">
                <div className="bg-gray-400 w-4 h-0.5"></div>
            </div>
            <div className="mt-5">
                <h1 className="text-lg font-semibold text-gray-800">24/7 Support</h1>
                <p className="mt-1 text-gray-600">Un SAV compréhensif et humain</p>
            </div>
        </div>
        {/* <!-- End Icon Block --> */}
    </div>
    </div>
    {/* <!-- End Icon Blocks --> */}
    </>
)}