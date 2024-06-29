import Heading from "../../components/Heading";
import { Activities } from "../components/Activities";
import { NewsLetter } from "../components/NewsLetters";
import { Projects } from "../components/Projects";
import { FaBrain } from "react-icons/fa";
import ProductSlider from "../components/ProductSlider";
import Cover from "../components/Cover";

export default function Vitrine() {

    const FEATURES:IFeature[] = [
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus.",
            icon: <FaBrain className="size-8" />
        },
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus.",
            icon: <FaBrain className="size-8" />
        },
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus.",
            icon: <FaBrain className="size-8" />
        },
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus.",
            icon: <FaBrain className="size-8" />
        },
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus.",
            icon: <FaBrain className="size-8" />
        },
        {
            title: "Lorem ipsum dolor",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus.",
            icon: <FaBrain className="size-8" />
        },
    ]

    return (<>

        <div className="space-y-">

            <Cover />

            <Projects />

            <ProductSlider items={[]} />

            <div className="mx-auto md:max-w-screen-xl px-4 md:px-0">
                <Heading 
                    subtitle={"Our Team by the numbers"}
                    title={"Our Team by the numbers"}
                    position={"center"}
                    text={"Ces projets peuvent couvrir un large éventail de domaines tels que la réduction de la pauvreté, l'autonomisation des femmes, la protection de l'environnement, l'éducation, l'accès à l'eau potable, le développement rural, etc. Les étudiants développent des compétences en leadership, en gestion de projet et en entrepreneuriat tout en apportant des solutions créatives aux problèmes sociaux."}
                />

                <div className="grid grid-cols-2 gap-6 rounded-lg bg-cyan-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
                    <Stat data={200} text={"People"} />
                    <Stat data={"500+"} text={"People"} />
                    <Stat data={"1000+"} text={"Customers"} />
                    <Stat data={"A couple"} text={"Coffee breaks"} />
                </div>
            </div>

            <NewsLetter />

            <Activities />

            <div className="mx-auto max-w-screen-xl">
                <Heading 
                    subtitle={"Our Mission"}
                    title={"Our Mission"}
                    position={"center"}
                    text={"Ces projets peuvent couvrir un large éventail de domaines tels que la réduction de la pauvreté, l'autonomisation des femmes, la protection de l'environnement, l'éducation, l'accès à l'eau potable, le développement rural, etc. Les étudiants développent des compétences en leadership, en gestion de projet et en entrepreneuriat tout en apportant des solutions créatives aux problèmes sociaux."}
                />

                <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                    {FEATURES.map((item, index) => (
                        <Feature key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))}
                </div>
            </div>
            

        </div>
    </>)
}


interface IStat {
    data: number | string;
    text: string;
}

const Stat = ({ data, text }: IStat) => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">{data}</div>
            <div className="text-sm text-gray-100 sm:text-base">{text}</div>
        </div>
    )
}


interface IFeature {
    title: string
    description: string
    icon: React.ReactNode
}

const Feature = ({ title, description, icon }: IFeature) => {
    return (
        <div className="flex gap-4 md:gap-6">
            <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-600 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                {icon}
            </div>

            <div>
                <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
                <p className="mb-2 text-gray-500">{description}</p>
            </div>
        </div>
    )
}