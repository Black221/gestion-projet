import { FaDoorOpen, FaUserAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import Button from "./Button";

interface ISidebar {
    open: boolean;
    float?: boolean;
    width?: number;
    preview?: boolean;
    nav: Nav[];
}

interface Nav {
    icon?: ReactNode,
    group : string;
    links : {
        icon?: ReactNode,
        name: string;
        to: string;
    }[]
}
export default function Sidebar ({open, float, width, nav}: ISidebar) {

    const { getUser } = useAuth();

    const location = useLocation();
    const isCurrent = (path: string) => {
        if (location.pathname.split("/").pop()?.includes(path.split("/").pop() || "_") || false)
            return location.pathname.includes(path);
        return false;
    }

    return (<>
        <div className={`h-screen overflow-y-auto bg-white min-w-64 p-4 md:pr-2
            flex flex-col z-[1000]
            ${open ? 'left-0' : '-left-full'} 
            ${float ? 'fixed' : 'relative'}
            ${width ? 'w-'+ width : ''}`} style={{
                transition: "left 0.25s"
            }}>

            <div className="w-full p-2 rounded-xl bg-gray-400 flex justify-between">
                <div className="flex items-center justify-center size-16 rounded-full bg-white">
                    <FaUserAlt  size={24}/>
                </div>
                <div className="text-end text-white flex flex-col justify-between">
                    <div className="">{getUser()?.role}</div>
                    <Button label="Voir profile" className="p-1 text-xs" />
                </div>
            </div>
            <div className="flex-1 py-4">
                {nav.map( (item, index) => (
                    <div key={index}>
                        <div className="text-gray-500 text-sm font-bold uppercase">{item.group}</div>
                        <ul className="space-y-1">
                            {item.links.map((link, index) => (
                                <Link key={index} to={link.to} children={link.name} active={
                                    isCurrent(link.to)
                                } />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <NavLink to={""} className="py-4 flex items-center gap-4">
                <FaDoorOpen className="inline-block text-gray-500 size-8" /> 
            </NavLink>
        </div>
    </>)
}

const Link = ({icon, to, children, active}: {icon?: React.ReactNode, to: string, children: string, active: boolean}) => {
    return (<>
        <li className={` hover:bg-gray-100 rounded-lg ${active ? 'bg-gray-200 font-medium' : ''}`}>
            {icon} <NavLink to={to} className="text-gray-500 py-2 px-4 block ">{children}</NavLink>
        </li>
    </>)
}