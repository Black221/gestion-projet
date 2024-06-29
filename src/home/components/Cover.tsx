

export default function Cover() {


    return (<>
         <section className="mx-auto max-w-screen-2xl px-4 md:px-8 md:mt-12 mt-24">
            <div className="mb-8 flex flex-wrap items-center justify-between md:mb-16 my-auto px-10">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-[46px]">Une expertise avérée pour des opérations efficientes</h1>
                    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet eius iure explicabo! Magnam nostrum distinctio qui odio explicabo? Non officiis eum sed provident. Necessitatibus.
                    </p>
                </div>

                <div className="mb-12 flex w-full md:mb-8 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-20 lg:ml-0">
                        <img src="cam1.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-[550px] object-cover object-center" />
                    </div>

                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img src="log1.jpg" loading="lazy" alt="Photo by Manny Moreno" className="h-full w-[550px] object-cover object-center" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-96 divide-x overflow-hidden rounded-lg border">
                    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-[#FFC125] hover:text-white active:bg-gray-200">Géologie</a>
                    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-[#FFC125] hover:text-white active:bg-gray-200">Logistique</a>
                    <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-[#FFC125] hover:text-white active:bg-gray-200">Agrobusiness</a>
                </div>
            </div>
        </section>
    </>)
}