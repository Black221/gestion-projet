import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";



export default function New () {

    return (<>
        <div className="space-y-6">
            
            <div className="flex items-center">
                <div className="text-xl font-semibold flex-1">
                    Ajouter un utilisateur
                </div>
                <div>
                    <Button label={<a href="utilisateurs/upload">Upload</a>} />
                </div>
            </div>

            <div className="space-y-4">
                <Input id="name" label="Nom" onChange={console.log} className="text-sm font-medium" />
                <Input id="lastname" label="Prénom" onChange={console.log} className="text-sm font-medium" />
                <Input id="email" label="Email" onChange={console.log} className="text-sm font-medium" />
                <Input id="phone" label="Telephone" onChange={console.log} className="text-sm font-medium" />
                <Select label="Role" onChange={console.log} options={[
                    "Chercheur", "Docteur", "Etudiant"
                ]} className="text-sm font-medium" />
            </div>
            <div>
                <Button label="Enregistrer" className="bg-gray-200 hover:bg-blue-500 hover:text-white hover:font-medium" />
            </div>
        </div>
    </>)
}