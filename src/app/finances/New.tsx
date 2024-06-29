import Button from "../../components/Button";
import Input from "../../components/Input";
import { Textarea } from "../../components/Teaxarea";



export default function New () {

    return (<>
        <div className="space-y-6">
            <div className="text-xl font-semibold">
                Information sur le projet
            </div>
            <div className="space-y-4">
                <Input id="" label="Nom" onChange={console.log} className="text-sm font-medium" />
                <Textarea row={8} disabled={false} label="Description" onChange={console.log} className="text-sm font-medium" />
                <Input id="" label="Crée le" type="date" onChange={console.log} className="text-sm font-medium" />
            </div>
            <div>
                <Button label="Enregistrer" className="bg-gray-200 hover:bg-blue-500 hover:text-white hover:font-medium" />
            </div>
        </div>
    </>)
}