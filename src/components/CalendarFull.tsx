import moment from 'moment';
import { useEffect, useState} from "react";

interface Props {
    getDate: (date: string) => void;
    dateToColor?: Event[];
}

interface Event {
    start: string;
    end: string;
    title: string;
}


interface Dic {
    [index : string]: string;
}

export const Calendar = ({getDate, dateToColor}: Props) => {

    const [selectedDate, setSelectedDate] = useState<string>();
    const [rows, setRows] = useState<any[]>([]);

    const today = moment();
    const [currentDate, setCurrentDate] = useState(today);
    const [monthToRender, setMonthToRender] = useState<number>(today.month());
    const [yearToRender, setYearToRender] = useState<number>(today.year());

    const englishToFrench:  Dic = {
        Sun: 'Dim',
        Mon: 'Lun',
        Tue: 'Mar',
        Wed: 'Mer',
        Thu: 'Jeu',
        Fri: 'Ven',
        Sat: 'Sam',
        Jan: 'Janv',
        Feb: 'Févr',
        Mar: 'Mars',
        Apr: 'Avr',
        May: 'Mai',
        Jun: 'Juin',
        Jul: 'Juil',
        Aug: 'Août',
        Sep: 'Sept',
        Oct: 'Oct',
        Nov: 'Nov',
        Dec: 'Déc',
    };

    function convertToFrench(text: string) {
        return englishToFrench[text] || text;
    }

    const weekDayShortName = moment.weekdaysShort().map((day: string) => {
        return (
            <th key={day} className='py-2'>
                <div className="w-full flex justify-center">
                    <p className="md:text-base text-sm font-medium text-center text-gray-800 ">{convertToFrench(day)}</p>
                </div>
            </th>
        );
    });

    const firstDayOfMonth = () => {
        return parseInt(moment(currentDate)
            .startOf("month")
            .format("d"));
    };

    const getBlank = () => {
        const blanks = [];
        for (let i = 0; i < firstDayOfMonth(); i++) {
            blanks.push(
                <td key={i} className="pt-6 h-32 border">
                    <div className="px-2 py-2  cursor-pointer flex w-full justify-center"></div>
                </td>
            );
        }
        return blanks;
    }

    const getDayInMonth = () => {
        const daysInMonth = [];
        for (let d = 1; d <= currentDate.daysInMonth(); d++) {
            const events = dateToColor?.filter(
                (date) => {
                    const start = date.start
                    const end = date.end

                    return  moment(`${d}/${(monthToRender + 1)}/${yearToRender}`, "D/M/YYYY").isBetween(
                        moment(start, "D/M/YYYY").add(-1, "days"),
                        moment(end, "D/M/YYYY").add(1, "days")
                    )
                }
            ) || [];
            daysInMonth.push(
                <td key={(d + 1) * 100} className=" text-gray-500 border h-32 w-32">
                    <p className={`md:text-base text-xs font-medium pl-4`}>{d}</p>
                    <div onClick={() => {
                        getDate(`${d}/${(monthToRender + 1)}/${yearToRender}`);
                        setSelectedDate(`${d}/${monthToRender + 1}/${yearToRender}`);
                    }} className={`
                        cursor-pointer p-2 h-24 w-full justify-center 
                        ${selectedDate && selectedDate === `${d}/${(monthToRender + 1)}/${yearToRender}` ? "bg-cyan-500 text-white" 
                        : dateToColor && events.length && "bg-gray-200 text-gray-800"} 
                        ${`${d}/${(monthToRender + 1)}/${yearToRender}` === today.format("D/M/y") ? "bg-blue-400 text-white" : ""} 
                    `}>
                        {events.length > 0 && events[0].start === `${d}/${(monthToRender + 1)}/${yearToRender}`  && <div className='w-fit'>
                            <div className='text-lg font-medium'>{events[0].title}</div>
                            <div className='text-xs'>{events[0].start} - {events[0].end}</div>
                        </div>}
                    </div>
                </td>
            );
        }
        return daysInMonth;
    }

    const getRows = () => {
        let c:any[] = [];
        const r:any[] = [];
        const array = [...getBlank(), ...getDayInMonth()];
        array.forEach((row, i) => {
            if (i % 7 !== 0) {
                c.push(row); // if index not equal 7 that means not go to next week
            } else {
                r.push(c); // when reach next week we contain all td in last week to rows
                c = []; // empty container
                c.push(row); // in current loop we still push current row to new container
            }
            if (i === array.length - 1) { // when end loop we add remain date
                r.push(c);
            }
        });
        return r;
    }


    useEffect(() => {
        setRows(getRows())
        // eslint-disable-next-line
    }, [dateToColor, selectedDate, currentDate])

    useEffect(() => {

        setCurrentDate(moment(`${(monthToRender + 1)} 1 ${yearToRender}`, "M D YYYY"))

    },[monthToRender, yearToRender])


    return (<>
        <div className="h-full rounded ">
            <div className={"md:text-3xl font-semibold flex items-center justify-center"}>
                <button type={"button"} aria-label="calendar backward"
                        onClick={() => setYearToRender((y) => y - 1)}
                        className="focus:text-gray-400 mr-3 hover:text-gray-400 text-gray-800 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left"
                         width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="15 6 9 12 15 18"/>
                    </svg>
                </button>
                {yearToRender}
                <button type={"button"} aria-label="calendar forward"
                        onClick={() => setYearToRender((y) => (y + 1))}
                        className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right"
                         width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                         fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <polyline points="9 6 15 12 9 18"/>
                    </svg>
                </button>
            </div>
            <div className="px-4 flex items-center justify-between">
                <span tabIndex={0} className="focus:outline-none  text-base font-bold  text-gray-800">{convertToFrench(moment.monthsShort(monthToRender))}</span>
                <div className="flex items-center">
                    <button type={"button"} aria-label="calendar backward"
                            onClick={() => setMonthToRender((m) => {
                                return m > 0 ? m - 1 : 11
                            })}
                            className="focus:text-gray-400 hover:text-gray-400 text-gray-800 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="15 6 9 12 15 18"/>
                        </svg>
                    </button>
                    <button type={"button"} aria-label="calendar forward"
                            onClick={() => setMonthToRender((m) => {
                                return m < 11 ? m + 1 : 0
                            })}
                            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler  icon-tabler-chevron-right"
                             width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <polyline points="9 6 15 12 9 18"/>
                        </svg>
                    </button>

                </div>
            </div>
            <div className="flex items-center justify-between mt-6  overflow-x-auto bg-white">
                <table className="w-full ">
                    <thead className=''>
                        <tr className='border py-4'>
                            {weekDayShortName}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((d, i) => {
                            return (<tr key={(i + 1) * 10}>{d}</tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}