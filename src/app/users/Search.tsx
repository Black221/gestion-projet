import { useEffect, useState } from "react";
import { Table } from "../../components/Table";
import useAxios from "../../hooks/useAxios";
import backend from "../../api/backend";
import { useNavigate } from "react-router-dom";


export default function Search () {

    const navigate = useNavigate();

    const sort = (col:string) => (data: any[], sens: boolean) => {
        return data.sort((a, b) => {
            if (a[col] > b[col]) {
                return sens ? 1 : -1
            } else {
                return sens ? -1 : 1
            }
        })
    }

    const columns = [
        { name: "firstname", label: "Prenom", sort: sort("firstname") },
        { name: "lastname", label: "Nom", sort: sort("lastname") },
        { name: "role", label: "Role", sort: sort("role") },
        { name: "email", label: "Email", sort: sort("email") },
    ]


    const actions = [
        { element: <button >Voir plus</button>, onClick: (data: any) => {
            console.log(data)
            navigate(`/app/utilisateurs/${data._id}`)
        } },
    ]

    const [data, setData] = useState<any[]>([])
    const [response, error, loading, fetch] = useAxios();

    useEffect(() => {
        fetch({
            axiosInstance: backend,
            url: "user/getAllUser",
            method: "GET",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (response) {
            setData(response)
        }
    }, [response])

    useEffect(() => {
        if (error) {
            console.log(error)
        }
    }, [error])


    return (<>
        <div>
            {loading && <p>Chargement...</p>}
            <Table label="Liste des projets" columns={columns} data={data} actions={actions} />
        </div>
    </>)
}