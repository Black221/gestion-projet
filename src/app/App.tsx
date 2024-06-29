import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"

import { useMainState } from "../hooks/useMainState";
import { useEffect } from "react";

import Dashboard from "./Dashboard";
import Projects from "./projects/Page";
import Users from "./users/Page";
import Documents from "./documents/Page";
import Finances from "./finances/Page";


function App() {


	const {
        setScreenSize,
        setLargeScreen,
    } = useMainState();

	useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth);
            if (window.innerWidth < 768)
                setLargeScreen(false);
            else
                setLargeScreen(true);
        };
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    });


	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>
                <Route path="/" element={<Dashboard />}/>

                <Route path="/projets/*" element={ <Projects />} />

                <Route path="/utilisateurs/*" element={ <Users /> } />

                <Route path="/documents/*" element={ <Documents /> } />

                <Route path="/finances/*" element={ <Finances /> } />
			</Route>
		</Routes>
	</>)
}

export default App
