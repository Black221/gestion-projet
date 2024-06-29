import { Table } from "../../components/Table";



export default function Search () {

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
        { name: "name", label: "Nom", sort: sort("name") },
        { name: "description", label: "Description", sort: sort("description") },
        { name: "status", label: "Status", sort: sort("status") },
        { name: "created_at", label: "Créé le", sort: sort("created_at") },
        { name: "updated_at", label: "Mis à jour le", sort: sort("updated_at") },
    ]

    const data = [
        { name: "Projet 1", description: "Description du projet 1", status: "En cours", created_at: "2021-09-01", updated_at: "2021-09-01" },
        { name: "Projet 2", description: "Description du projet 2", status: "Terminé", created_at: "2021-09-01", updated_at: "2021-09-01" },
        { name: "Projet 3", description: "Description du projet 2", status: "Terminé", created_at: "2021-09-01", updated_at: "2021-09-01" },
    ]

    const actions = [
        { element: <button>Voir plus</button>, onClick: () => console.log("Modifier") },
    ]

    return (<>
        <div>
            <Table label="Liste des projets" columns={columns} data={data} actions={actions} />
        </div>
    </>)
}