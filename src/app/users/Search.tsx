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
        { name: "firstname", label: "Nom", sort: sort("name") },
        { name: "lastname", label: "Prenom", sort: sort("lastname") },
        { name: "role", label: "Role", sort: sort("role") },
        { name: "email", label: "Email", sort: sort("email") },
    ]

    const data = [
        { firstname: "username1", lastname: "user1", role: "Chercheur", email: "user1@gmail.com"},
        { firstname: "username2", lastname: "user2", role: "Doctorant", email: "user2@gmail.com"},
        { firstname: "username3", lastname: "user3", role: "Etudiant", email: "user3@gmail.com"},
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