import { useNavigate } from "react-router-dom";
import { Graph } from "../../components/chart";
import Icon from "../../components/Icon";
import { Table } from "../../components/Table";
import { TicketsV3 } from "../../components/Tickets";



export default function Dashboard () {

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

    const ACTIVITIES_COLUMN = [
        { name: "date", label: "Date", sort: sort("date") },
        { name: "activity", label: "Activité", sort: sort("activity") },
        { name: "user", label: "Utilisateur", sort: sort("user") },
    ]

    const actions = [
        { element: <button >Voir plus</button>, onClick: (data: any) => {
            console.log(data)
            navigate(`/app/utilisateurs/${data._id}`)
        } },
    ]

    const data = [
        { date: "2021-10-10", activity: "Ajout d'un utilisateur", user: "admin" },
        { date: "2021-10-10", activity: "Ajout d'un utilisateur", user: "admin" },
        { date: "2021-10-10", activity: "Ajout d'un utilisateur", user: "admin" },
        { date: "2021-10-10", activity: "Ajout d'un utilisateur", user: "admin" },
        { date: "2021-10-10", activity: "Ajout d'un utilisateur", user: "admin" },
    ]

    return (<>
        <div className="space-y-10">
            <div className="flex flex-wrap w-full gap-2 justify-around">
                <TicketsV3 icon={
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="fas fa-school" size={24} color="black" onClick={() => {}} />
                    </div>
                } desctiprion="Nombre de formations" title="Formations" data="10" smdata="+0.0%" color="green"/>
                <TicketsV3 icon={
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="fas fa-users" size={24} color="black" onClick={() => {}} />
                    </div>
                } desctiprion="Nombre d'Etudiants" title="Etudiants" data="100" smdata="-10%" color="green"/>
                <TicketsV3 icon={
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
                        <Icon name="fas fa-chalkboard-user" size={24} color="black" onClick={() => {}} />
                    </div>
                } desctiprion="Nombre d'Enseignants" title="Enseignants" data="10" smdata="+0.2%" color="green"/>
            </div>

            <div className="flex w-full gap-10">
                <Graph />
                <Table label="Dernières activités" columns={ACTIVITIES_COLUMN} data={data} actions={actions} />
            </div>
        </div>
    </>)
}