

export const NewsLetter = () => {

    return (<>
        <div id={"contact"} className="bg-white">
            <div className="">
                <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
                    <div className="mb-4 sm:mb-8">
                        <h2 className="text-center text-xl font-bold text-main sm:text-2xl lg:text-3xl">Get the
                            latest updates</h2>
                        <p className="text-center text-gray-500">Sign up for our newsletter</p>
                    </div>

                    <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                        <input placeholder="Email"
                               className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"/>

                        <button
                            className="inline-block rounded bg-main px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-main transition duration-100 hover:bg-main focus-visible:ring active:bg-main md:text-base">Send
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400">By signing up to our newsletter you agree to our <a
                        href="#"
                        className="underline transition duration-100 hover:text-main active:text-main">Term
                        of Service</a> and <a href="#"
                                              className="underline transition duration-100 hover:text-main active:text-main">Privacy
                        Policy</a>.</p>
                </div>
            </div>
        </div>
    </>)
}