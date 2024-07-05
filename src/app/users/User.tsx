import useAxios from "../../hooks/useAxios"
import backend from "../../api/backend";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "../../components/Table";




export default function User () {

    const [response, error, loading, fetch] = useAxios();
    const [user, setUser] = useState<any>();
    const [message, setMessage] = useState<any>();

    const params = useParams()

    useEffect(() => {
        fetch({
            axiosInstance: backend,
            method: "GET",
            url: "/user/getUser/"+ params.id
        })
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (response)
            setUser(response);
        if (error)
            setMessage(error);
    }, [response, error])

    const sort = (col:string) => (data: any[], sens: boolean) => {
        return data.sort((a, b) => {
            if (a[col] > b[col]) {
                return sens ? 1 : -1
            } else {
                return sens ? -1 : 1
            }
        })
    }


    const PROJET_COLUMNS: any = [
        {name: "name", label: "Nom",sort: sort("name")}, 
        {name: "description", label:"Description", sort: sort("description")}, 
        {name: "start_date", label: "Date de debut", sort: sort("creatd_at")}, 
        {name: "end_date", label: "Date de fin", sort: sort("created_at")},  
        {name: "status", label: "Status", sort: sort("status")}, 
    ];
    const PROJET_ACTIONS = [{element: <button>Voir plus</button>, onClick: (data: any) => console.log(data)}]
    

    const PROJET_DATA = [
        {name: "Projet 1", description: "Description du projet 1", start_date: "01/01/2021", end_date: "01/01/2022", status: "En cours"},
        {name: "Projet 2", description: "Description du projet 2", start_date: "01/01/2021", end_date: "01/01/2022", status: "En cours"},
        {name: "Projet 3", description: "Description du projet 3", start_date: "01/01/2021", end_date: "01/01/2022", status: "En cours"},
        {name: "Projet 4", description: "Description du projet 4", start_date: "01/01/2021", end_date: "01/01/2022", status: "En cours"},
    ]
    

    return (<>
        <div className="flex gap-4">
            {message && <div>{message}</div>}
            {loading && <div>Loading...</div>}
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center p-4 py-2 rounded-md  bg-white border-gray-200">
                    <div className="size-20 border rounded-full">
                        <img src={user?.avatar} alt="" className="rounded-full" />
                    </div>
                    <div>
                        <div className="text-lg font-semibold">{user?.firstname+" "+user?.lastname}</div>
                        <div className="text-sm text-gray-500">{user?.email}</div>
                        <div className="text-sm text-gray-500 capitalize">{user?.role}</div>
                    </div>
                </div>
                <div className="bg-white  border-gray-200 p-4 space-y-4 rounded-md">
                    <h2 className="text-lg font-semibold">User Information</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="font-">Prenom:</div>
                            <div>{user?.firstname}</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-">Nom:</div>
                            <div>{user?.lastname}</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-">Téléphone:</div>
                            <div>{user?.phone}</div>
                        </div>
                        <div className="flex gap-4">
                            <div className="font-">Adress:</div>
                            <div>{user?.address}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4 flex-1 border-gray-200">
                <div className="flex flex-col gap-4">
                    <Table label="Liste des projets participés" columns={PROJET_COLUMNS} data={PROJET_DATA} actions={PROJET_ACTIONS}/>
                </div>
            </div>
        </div>
    </>)   
}