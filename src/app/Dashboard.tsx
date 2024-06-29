import { Calendar } from "../components/CalendarFull";



export default function Dashboard () {


    const data = [{
        start : "12/6/2024",
        end: "16/6/2024",
        title: "Test"
    }, {
        start: "21/6/2024",
        end: "21/6/2024",
        title: ""
    }]
    return (<>
        <div className="h-full bg--400">
            <Calendar dateToColor={data} getDate={(date) => console.log(date)} />
        </div>
    </>)
}