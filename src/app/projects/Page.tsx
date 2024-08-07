import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Search from "./Search";
import New from "./New";
import Stats from "./Stats";



export default function Page() {

    return (<>
        <Routes>
            <Route element={ <Layout /> }>

                <Route path="/" element={
                    <Dashboard />
                }/>

                <Route path="/rechercher" element={
                    <Search />
                }/>

                <Route path="/nouveau" element={
                    <New />
                } />

                <Route path="/statistiques" element={
                    <Stats />
                } />
            </Route>
        </Routes>
    </>)
}