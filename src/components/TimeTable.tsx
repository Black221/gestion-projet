

interface Props {
    data: Data[];
    start: string;
    end: string;
}

interface Data {
    day: number;
    start: string;
    end: string;
    course: string;
}

export default function Timetable ({data, start, end}: Props) {


    const DAYS = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ]

    const HOURS = [
        "8:00",  "10:00", "12:00",  "14:00", "16:00", "18:00", "20:00"
    ]

    const currentTime = new Date().getHours() + ":" + "00"
    const currentDate = new Date().getDay()
  
    console.log(start, end)

    return (<>
        <div className="border h-full w-full">
            <table className="w-full bg-white rounded-md h-full border-collapse">
                <thead className="h-16 ">
                    <tr className="">
                        <th className="py-2 px-6 ">
                            Heures
                        </th>
                        {DAYS.map((d) => {
                            return (<th className="py-2 px-6">
                                {d}
                            </th>)
                        })}
                    </tr>
                </thead>
                <tbody className="">
                    {HOURS.map((h) => {
                        return <tr>
                            <td className="text-center">
                                {h}
                            </td>
                            {// eslint-disable-next-line
                            DAYS.map((_: string, index) => {
                                return (<td rowSpan={1} className={`border text-center ${currentDate == index && currentTime == h ? "bg-blue-100" : ""}`}>
                                    {data.filter((d: Data) => d.day == index && d.start == h).map((d: Data) => {
                                        return <div>{d.course}</div>
                                    })}
                                </td>)
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </>)
}