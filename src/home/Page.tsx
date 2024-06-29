import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Vitrine from "./pages/Vitrine";
import Actualities from "./pages/Actualities";
import Actuality from "./pages/Actuality";

export default function Page() {

    return (<>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path="/" element={<Vitrine />} />
                <Route path="/actu" element={<Actualities />} />
                <Route path="/actu/:slug" element={<Actuality />} />

                
            </Route>
        </Routes>
    </>)
}