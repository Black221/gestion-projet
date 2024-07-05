import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import Search from "./Search";
import New from "./New";
import Stats from "./Stats";
import Upload from "./Upload";
import User from "./User";



export default function Page() {

    return (<>
        <Routes>
            <Route element={ <Layout /> }>

                <Route path="/" element={
                    <Dashboard />
                }/>

                <Route path="/:id" element={
                    <User />
                }/>

                <Route path="/rechercher" element={
                    <Search />
                }/>

                <Route path="/nouveau" element={
                    <New />
                } />

                <Route path="/upload" element={
                    <Upload />
                } />

                <Route path="/statistiques" element={
                    <Stats />
                } />
            </Route>
        </Routes>
    </>)
}