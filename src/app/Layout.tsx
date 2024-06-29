import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useMainState } from "../hooks/useMainState";
import { Breadcrumb } from "../components/Breadcumb";


export default function Layout() {

    const [open, toggle] = useState(false);
    const [float, setFloat] = useState(true);
    const { largeScreen } = useMainState();

    const ref = useRef<any>(null);
    const sidebarRef = useRef<any>(null);

    const handleClick = (e: any) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target) && open && !largeScreen) {
            toggle(false);
        }
    }
    
    useEffect(() => {
        if (largeScreen) {
            toggle(true);
            setFloat(false);
        } else {
            toggle(false);
            setFloat(true);
        }
    }, [largeScreen]);

    const location = useLocation();

    const getLinks = (path: string) => {

        let ref = ''
        const tab = path.split('/')
        tab.shift();
        if (tab[tab.length - 1] === '') tab.pop()
            
        return tab.map((link) => {
            ref = ref + link + '/'
            return { label: link, icon: "", href: "/" + ref}
        })
    }
    
    const nav = [{
        group: 'Accueil',
        links: [{
            to: "/app",
            name: "Vue d'ensemble"
        }]
    },{
        group: 'Projets',
        links: [{
            to: "projets",
            name: 'Tableau de bord',
        },{
            to: "projets/nouveau",
            name: 'Nouveau projet',
        },{
            to: "projets/rechercher",
            name: "Rechercher un projet"
        }]
    },{
        group: 'Documents',
        links: [{
            to: "documents",
            name: 'Tableau de bord',
        },{
            to: "documents/nouveau",
            name: 'Inserrer un document',
        },{
            to: "documents/impression",
            name: 'Imprimer un document',
        },{
            to: "documents/rechercher",
            name: "Rechercher un document"
        }]
    },{
        group: 'Finances',
        links: [{
            to: "finances",
            name: 'Tableau de bord',
        },{
            to: "finances/nouveau",
            name: 'Nouvelle transaction',
        },{
            to: "finances/rechercher",
            name: "Rechercher une transaction",
        }, {
            to: "finances/rapports",
            name: "Rapports"
        }]
    },{
        group: 'Utilisateurs',
        links: [{
            to: "utilisateurs",
            name: "Tableau de bord",
        },{
            to: "utilisateurs/rechercher",
            name: "Rechercher un utilisateur"
        }, {
            to: "utilisateurs/nouveau",
            name: "Nouveau utilisateur"
        },{
            to: "utilisateurs/upload",
            name: "Upload utilisateurs"
        }]
    }]

    return (<>
        <div  ref={ref} onClick={handleClick} className="flex relative">
            <div ref={sidebarRef} >
                <Sidebar  open={open} float={float} nav={nav}  />
            </div>
            <div  className="flex-1 flex flex-col  h-screen">
                <Header toggle={toggle} />
                <div className="flex-1 flex flex-col bg-white p-2 md:pr-4 overflow-auto">
                    <div className=" bg-gray-100 rounded-2xl flex-1 flex flex-col md:px-6 p-4 pt-0">
                        <Breadcrumb link={getLinks(location.pathname)} />
                        <div className="flex-1 w-full">
                            <Outlet />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    </>)
}