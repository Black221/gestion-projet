
interface IHeading {
    subtitle: string;
    title: string;
    text: string;
    position: "center" | "left";
    width?: "md" | "lg";
}

export default function Heading  ({subtitle, title, text, position, width}: IHeading) {

    return (
        <div className={`bg-white py-6 sm:py-8 lg:py-12 ${position === "center" && "text-center"} ${width === "md" ? "max-w-md": width === "lg" && "max-w-lg"}`}>
            <div className={`mx-auto max-w-screen-2xl px-4 md:px-8`}>
                <p className="mb-2 font-semibold text-main md:mb-3 lg:text-lg capitalise">{subtitle}</p>
                <h2 className="mb-2 text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">{title}</h2>
                <p className=" text-gray-500 md:text-lg">{text}</p>
            </div>
        </div>
    )
}