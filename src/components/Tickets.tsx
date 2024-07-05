

interface Props {
    icon: React.ReactElement;
    desctiprion: string;
    title: string;
    data: string;
    smdata: string;
    color: string;
}

export  function Tickets ({icon, title, data, smdata, color, desctiprion}: Props) {

    return (<>
        <div className="w-80 border rounded-xl items-center flex flex-col p-6 py-4 space-y-4">
            <div className="flex justify-between items-center w-full">
                <div>
                    <div className="text-lg text-gray-600">{title}</div>
                    <div  className="text-3xl font-black text-gray-600">{data}</div>
                </div>
                <div>
                    {icon}
                </div>
            </div>
            <div className="space-x-2">
                <span className={`text-${color}-500 font-bold`}>{smdata}</span>
                <span className="text-gray-500">{desctiprion}</span>
            </div>
        </div>
    </>)
}

export const TicketsV2 = ({ icon , title, data, smdata, color, desctiprion }: Props) => {

    return(<>
        <div className="max-w-96 border rounded-xl items-center flex flex-col p-6 py-4 space-y-4">
            <div className="flex justify-between items-center w-full space-x-4">
                <div>
                    {icon}
                </div>
                <div className="text-end">
                    <div className="text-lg text-gray-600">{title}</div>
                    <div className="text-3xl font-black text-gray-600">{data}</div>
                </div>
            </div>
            <hr  className="w-full"/>
            <div className="space-x-2">
                <span className={`text-${color}-500 font-bold`}>{smdata}</span>
                <span className="text-gray-500">{desctiprion}</span>
            </div>
        </div>
    </>)
}


export const TicketsV3 = ({ icon , title, data, smdata, color, desctiprion }: Props) => {
    
    return(<>
        <div className="w-80 bg-white rounded-xl items-center flex flex-col p-6 py-4 space-y-4">
            <div className="flex justify-between items-center w-full">
                <div>
                    <div className="text-lg text-gray-600">{title}</div>
                    <div  className="text-3xl font-black text-gray-600">{data}</div>
                </div>
                <div>
                    {icon}
                </div>
            </div>
            <hr  className="w-full"/>
            <div className="space-x-2">
                <span className={`text-${color}-500 font-bold`}>{smdata}</span>
                <span className="text-gray-500">{desctiprion}</span>
            </div>
        </div>
    </>)
}