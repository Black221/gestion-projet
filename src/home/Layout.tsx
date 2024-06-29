
import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SocialMedia } from "./components/SocialMedia";
import Header from "./components/Header";

export default function Layout() {

    const [prevScrollpos, setPrevScrollpos] = useState(window.scrollY);
    const [top, setTop] = useState(0);
    const [open, toggle] = useState(false);

	const navRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				setTop(0); 
			} else {
				setTop(-50); 
			}
			setPrevScrollpos(currentScrollPos);
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollpos]);

    
    return (<>
        <main className="">
            <div className={`fixed ${top < 0 ? "-left-[80px]" : "left-0"} z-[1000]`} style={{
                transition: "left 0.6s"
            }}>
                <SocialMedia />
            </div>
            <Header ref={navRef} top={top} toggle={toggle} />
            <NavMobile open={open} toggle={toggle} />
            <Outlet />
            {/* <Footer /> */}
        </main>
    </>)
}

interface INavMobile {
    open: boolean;
    toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMobile = ({ open, toggle }: INavMobile) => {

    return (<>
        <div className={`fixed ${open ? "block" : "hidden"} top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999]`} onClick={() => toggle(false)}>
            <div className="relative top-8 pt-8 bg-white">
                <nav className="flex flex-col items-center justify-center gap-2 py-8">
                    <a href="#a-propos" className="block w-full px-4 py-6 text-sm bg-[#FFC125] capitalize">à propos</a>
                    <a href="#expertise" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Expertise</a>
                    <a href="#services" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Services</a>
                    <a href="#contact" className="block w-full px-4 py-6 text-sm bg-[#FFC125]">Contact</a>
                </nav>
            </div>
        </div>
    </>)
}