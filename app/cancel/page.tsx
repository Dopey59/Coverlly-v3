
import Link from "next/link"

export default function Cancel(){
    return(
        <div className="cancel-page ">
            <div className="flex justify-center items-center flex-col h-screen w-full gap-5 p-2 sm:p-0 text-center">
                <h1 className="uppercase text-4xl">Achat Annulé 😔</h1>
                <p className="max-w-md-screen">Vous avez annulé le paiement ou un problème est survenue. Si vous avez des questions, n’hésitez pas à nous <a className="font-bold text-rose-300" href="/contact">contacter</a>.</p>
                <Link href="/" className="btn border-black p-2 rounded border-2">Retour à la boutique</Link>
                </div>
            </div>

    )
}


  
