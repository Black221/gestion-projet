import { FaBell, FaComment, FaInfoCircle } from "react-icons/fa";
import { useMainState } from "../hooks/useMainState";
import { NavLink } from "react-router-dom";

interface IHeader {
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header ({toggle}: IHeader) {

    const { notifications, messages } = useMainState();

    return (<>
        <header > 
            <nav className="w-full bg-white py-4 px-4">
                <div className="flex items-center w-full gap-2">
                    <Menu toggle={toggle} />
                    <Logo />
                    <div className="flex flex-1 justify-end items-center gap-6 pr-4">
                        <Icon to="discussions" icon={<FaComment className="text-gray-500 size-6" />} count={messages.length} />
                        <Icon to="notifications" icon={<FaBell className="text-gray-500 size-6" />} count={notifications.length + 2} />
                        <Icon to="" icon={<FaInfoCircle className="text-gray-500 size-6" />}  count={0}  />
                    </div>
                </div>
            </nav>
        </header>
    </>)
}

const Menu = ({toggle}: {toggle:React.Dispatch<React.SetStateAction<boolean>>}) => {

    return(<>
        <div>
            <button onClick={ () => {
                    toggle(prev => !prev)
            }} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="size-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden size-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
    </>)
}

const Logo = () => {

    return(<>
        <a  className="flex items-center gap-4">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
            <span>Logo</span>
            <span className="self-center text-xl font-semibold whitespace-nowrap ">Gestion de projets</span>
        </a>
    </>)
}

const Icon = ({to, icon, count = 0}: {to: string, icon: React.ReactNode, count: number}) => {

    return(<>
        <NavLink to={to} className="relative">
            {icon}
            <div className={`${count > 0 ? "flex" : 'hidden'} absolute -top-2 -right-2 items-center justify-center size-5 text-xs font-semibold bg-blue-200 border border-white rounded-full`}>{count}</div>
        </NavLink>
    </>)
}