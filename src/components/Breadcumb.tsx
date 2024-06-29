import {useRef} from "react";
import { useNavigate } from "react-router-dom";

interface Props {
    link: Link[];
}

interface Link {
    icon?: React.ReactNode;
    label: string;
    href: string;
}

export const Breadcrumb = ({link} : Props) => {

    const a = useRef("");
    const navigate = useNavigate();


    return (<>
        <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap">
            <a href="#" className="text-gray-600 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                </svg>
            </a>

            {link.map((l: Link, index: number) => {
                a.current += "/" + l;

                let className = "capitalize text-gray-600  hover:underline";
                if (index === link.length - 1)
                    className = "capitalize text-blue-500  underline text-xl";

                return (
                    <div key={(index + 1) * 10} className={"flex items-center"}>
                        <Arrow  />
                        {l?.icon}
                        <button className={className} onClick={() => navigate(l.href)}>
                            {l.label}
                        </button>
                    </div>
                )
            })}

        </div>
    </>)
}


const Arrow = () => {

    return (<>
        <span  className="mx-3 text-gray-800  rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"/>
            </svg>
        </span>
    </>)
}