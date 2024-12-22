import Link from "next/link"
import Image from "next/image"

export default function BlogCarrousel() {
    return(

    // <!-- Card Blog -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* <!-- Grid --> */}
    <div className="grid lg:grid-cols-2 gap-6">
        {/* <!-- Card --> */}
        <Link className="group relative block rounded-xl focus:outline-none" href="/fabrication">
        <div className="shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
        <Image
          width={600}
          height={600}
          className="size-full absolute top-0 start-0 object-cover"
          src="https://images.unsplash.com/photo-1663433541063-ddab084d1126?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Blog Image"
        />
        </div>

        <div className="absolute bottom-0 inset-x-0 z-10">
            <div className="flex flex-col h-full p-4 sm:p-6">
            <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 group-focus:text-white/80">
                Les coulisses de Coverlly
            </h3>
            <p className="mt-2 text-white/80">
                - Nos méthodes de fabrication
            </p>
            </div>
        </div>
        </Link>
        {/* <!-- End Card --> */}
      </div>
    {/* <!-- End Grid --> */}
    </div>
    )
}