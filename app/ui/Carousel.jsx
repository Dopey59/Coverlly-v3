import Link from 'next/link';

export default function Carousel() {
  return(
    <>
    {/*<!-- Slider --> */}
    <div className="px-4 lg:px-8 sm:mt-44 mt-10">
      <div>
          <h1 className="lg:text-7xl my-6 sm:text-5xl uppercase text-3xl font-black bg-black text-white p-2 w-fit">Les Zartistes</h1>
      </div>
        <div data-hs-carousel='{
            "loadingClasses": "opacity-0"
          }' className="relative">
          <div className="hs-carousel relative overflow-hidden w-full h-[30rem]  bg-gray-100 rounded-2xl">
            <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
              {/* <!-- Item --> */}
              <div className="hs-carousel-slide">
                <div className="h-[30rem]  flex flex-col bg-[url('https://printful.s3-accelerate.amazonaws.com/files/bf7/bf7fbdfcd4e76dd52f9a344a5ab867ed?response-content-disposition=inline%3B%20filename%3D%22design-01jednak4q-1733478282.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA262TUYH3FYGDM3X4%2F20241208%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20241208T215641Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=4306685d1271b3f6519398213caad710f651d245f6e3cba7e6e20d776321e6dd')] bg-cover bg-center bg-no-repeat">
                  <div className="mt-auto w-full md:max-w-lg ps-5  pb-5 md:ps-10 md:pb-10">
                    <span className="block  bg-white p-2 uppercase font-black">Le Vincent</span>
                    <span className="block text-white text-xl md:text-3xl bg-black p-2">Tu le reconnais ? Non ce n&apos;est pas ton oncle sur la pochette.. </span>
                    <div className="mt-5">
                      <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="/produits/369479504">
                        Voir quand même
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Item --> */}
      
              {/* <!-- Item --> */}
              <div className="hs-carousel-slide">
                <div className="h-[30rem]  flex flex-col bg-[url('https://printful.s3-accelerate.amazonaws.com/files/a6f/a6f6c9c7ae08c39e8cdae735e1f38924?response-content-disposition=inline%3B%20filename%3D%22design-01jednak4q-1733478248.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA262TUYH3FYGDM3X4%2F20241208%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20241208T220309Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=b878049cbc1b7c992cc71d2f56b9b7b3e11ab7fd0ad194332297b2e7c771c96d')] bg-cover bg-center bg-no-repeat">
                  <div className="mt-auto w-2/3 md:max-w-lg ps-5  pb-5 md:ps-10 md:pb-10">
                    <span className="block bg-white p-2 uppercase font-black">Ciel étoilé</span>
                    <span className="block text-white text-xl md:text-3xl bg-black p-2">T&apos;as las ref ? </span>
                    <div className="mt-5">
                      <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="/produits/369496487">
                        Découvrir
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Item --> */}
      
              {/* <!-- Item --> */}
              <div className="hs-carousel-slide">
                <div className="h-[30rem]  flex flex-col bg-[url('https://printful.s3-accelerate.amazonaws.com/files/f51/f51b6cd0bfc34345ab07a76048979f21?response-content-disposition=inline%3B%20filename%3D%22design-01jednak4q-1733478209.jpg%22&response-content-type=image%2Fjpeg&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA262TUYH3FYGDM3X4%2F20241208%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20241208T220338Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Signature=039d553def1d99092a24ad3453f0aea2d7ee6977fa28ba67851b5aca69e83306')] bg-cover bg-center bg-no-repeat">
                  <div className="mt-auto w-2/3  md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                    <span className="block  bg-white p-2 uppercase font-black">Botablo</span>
                    <span className="block text-white text-xl md:text-3xl bg-black p-2">Raté! Ce n'est pas un tableau..</span>
                    <div className="mt-5">
                      <Link className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="/produits/369496583">
                        Découvrir
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Item --> */}
            </div>
          </div>
      
          {/* <!-- Arrows --> */}
          <button type="button" className="hs-carousel-prev   hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
            <span className="text-2xl" aria-hidden="true">
              <svg className="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
              </svg>
            </span>
            <span className="sr-only">Précédent</span>
          </button>
      
          <button type="button" className="hs-carousel-next bg-white bg-opacity-30 hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
            <span className="sr-only">Suivant</span>
            <span className="text-2xl" aria-hidden="true">
              <svg className="shrink-0 size-3.5 md:size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </span>
          </button>
          {/* <!-- End Arrows --> */}
        </div>
      </div>
      {/* <!-- End Slider --> */}
    
    </>
  )
}
