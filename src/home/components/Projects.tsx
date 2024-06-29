import Heading from "../../components/Heading";
import { FaAngleRight } from "react-icons/fa";


export const Projects = () => {

    const onClick = () => {
        console.log("clicked")
    }

    return (<>
        <div className="sm:px-8 lg:px-20">
            <Heading 
                text={"Ces projets peuvent couvrir un large éventail de domaines tels que la réduction de la pauvreté, l'autonomisation des femmes, la protection de l'environnement, l'éducation, l'accès à l'eau potable, le développement rural, etc. Les étudiants développent des compétences en leadership, en gestion de projet et en entrepreneuriat tout en apportant des solutions créatives aux problèmes sociaux."}
                subtitle={"Nos project"}
                title={"Entrepreneuriat social"}
                position={"center"}
            />
        </div>
        <div className="flex flex-wrap justify-around items-center  pt-0 mx-auto ">

            <Heading 
                title="Revolutionary way to build the web" 
                subtitle="Our project" 
                text="Ces projets peuvent couvrir un large éventail de domaines tels que la réduction de la pauvreté, l'autonomisation des femmes, la protection de l'environnement, l'éducation, l'accès à l'eau potable, le développement rural, etc. Les étudiants développent des compétences en leadership, en gestion de projet et en entrepreneuriat tout en apportant des solutions créatives aux problèmes sociaux." 
                position="left" 
                width="lg" 
            />

            <div className="h-96 w-96 flex items-center relative ">
                <div className="absolute items-center -left-14 w-64 h-72 rounded-xl shadow drop-shadow bg-white">
                    <img className="" src="./img/image3.png" id="m3" alt="" />
                </div>
                <div className="absolute w-72 h-80 rounded-xl shadow drop-shadow bg-white">
                    <img className="" src="./img/image2.png" id="m2" alt="" />
                </div>
                <div className="absolute left-14 w-80 h-96 rounded-xl shadow drop-shadow bg-white">
                    <img className="" src="./img/image1.png" id="m1" alt="" />
                </div>
                <div className="-right-10 absolute  flex items-center justify-center shadow drop-shadow rounded-full">
                    <button className="" onClick={() => onClick()}>
                        <FaAngleRight className="size-10" />
                    </button>
                </div>
            </div>

        </div>
        
    </>)
}
