'use client'
export default function Badges(){
    return(
    <>
    <section>
        <div  id='badgesContainer' className="mt-32 grid sm:grid-cols-4 sm:bg-black grid-cols-1 sm:h-40 sm:gap-6 w-auto">
            <div className="flex gap-3 h-32 sm:h-auto items-center sm:flex-col md:flex justify-center bg-black">
                <h3 className="font-regular text-white text-base">Livraison En Europe</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" fill="white" height="44" viewBox="0 0 24 24"><path d="M3.414 13.778 2 15.192l4.949 2.121 2.122 4.95 1.414-1.414-.707-3.536L13.091 14l3.61 7.704 1.339-1.339-1.19-10.123 2.828-2.829a2 2 0 1 0-2.828-2.828l-2.903 2.903L3.824 6.297 2.559 7.563l7.644 3.67-3.253 3.253-3.536-.708z"></path></svg>
            </div>
            <div className="flex gap-3 h-32 sm:h-auto  items-center justify-center sm:flex-col md:flex  bg-black">
                <h3 className="font-regular text-white text-base">Paiements sécurisé</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="44" fill="white" height="44" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7.5 12a2.5 2.5 0 1 1 0-5 2.47 2.47 0 0 1 1.5.512c-.604.456-1 1.173-1 1.988s.396 1.532 1 1.988a2.47 2.47 0 0 1-1.5.512zm4 0a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
            </div>
            <div className="flex gap-3 h-32 sm:h-auto  items-center justify-center sm:flex-col md:flex  bg-black">
                <h3 className="font-regular text-white text-base">Designs unique</h3>
                <svg xmlns="http://www.w3.org/2000/svg"  width="44" fill="white" height="44" viewBox="0 0 24 24"><path d="M9.38 21.646A9.985 9.985 0 0 0 12 22l.141-.001a2.998 2.998 0 0 0 2.515-1.425c.542-.876.6-1.953.153-2.88l-.198-.415c-.453-.942-.097-1.796.388-2.281.485-.485 1.341-.841 2.28-.388h.001l.413.199a2.99 2.99 0 0 0 2.881-.153A2.997 2.997 0 0 0 22 12.141a9.926 9.926 0 0 0-.353-2.76c-1.038-3.827-4.353-6.754-8.246-7.285-3.149-.427-6.241.602-8.471 2.833S1.666 10.247 2.096 13.4c.53 3.894 3.458 7.208 7.284 8.246zM15.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM9 15.506a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-2.5-6.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6.5 9.006z"></path></svg>
            </div>
            <div className="flex gap-3 h-32 sm:h-auto  items-center justify-center sm:flex-col md:flex  bg-black">
                <h3 className="font-regular text-white text-base">S.A.V Réactif</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="44"  height="44" fill="white" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"/></svg>
            </div>
        </div>
    </section>   
    </>
)}