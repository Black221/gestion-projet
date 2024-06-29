import { useState } from "react";



interface Props {
    page: number;
    length: number;
    dataCount: number;
    action: (action: string | number, nbRender: number) => void;
}


export default function Pagination ({page, length, dataCount, action}: Props) {

    const [nbToRender, setNbToRender] = useState<number>(length);
    const [pageList, setPageList] = useState(5);


    const onChangeRender = (nb: number) => {
        setNbToRender(nb);
        setPageList(Math.min(5, Math.floor(dataCount / nb)))
        action(0, nb);
    }

    return(<>
        <nav className="w-full flex items-center justify-between" aria-label="Table navigation ">
            <div className="space-x-4 flex items-center">
                <span className="text-sm font-normal text-gray-500  min-w-fit space-x-1">
                    <span>liste</span>
                    <span className="font-semibold text-gray-900">
                        {(page * nbToRender + 1) > dataCount ? dataCount : (page * nbToRender + 1)} - {(page + 1) < dataCount / nbToRender ? (page + 1) * nbToRender : dataCount}
                    </span>
                    <span>sur</span> 
                    <span className="font-semibold text-gray-900 ">
                        {dataCount}
                    </span>
                </span>
                <div className="h-5 w-[2px] rounded-full bg-gray-200"/>
                <div>
                    <span className="text-sm font-normal text-gray-500">Afficher par </span>
                    <select value={nbToRender} onChange={(e) => {
                        onChangeRender(parseInt(e.target.value))
                    }} className="text-sm font-normal text-gray-500 bg-white border border-gray-300 rounded-md">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
            <ul className="inline-flex items-center -space-x-px">
                <li>
                    <button onClick={() => {if (page > 0) action(page - 1, nbToRender)}}
                            disabled={page <= 0}
                            className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                        <span className="sr-only">Previous</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd">
                            </path>
                        </svg>
                    </button>
                </li>
                <li ><button onClick={() => {
                    action(0, nbToRender)
                }} className={ `px-3 py-2 leading-tight border ${page !== 0 ? " text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}`}>
                    {1}
                </button></li>
                {page > (pageList - 1) / 2 + 1 && <li>
                    <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">...</button>
                </li>}
                {Array.from(Array(pageList), ((_e, index) => {
                    if (index + page - (pageList - 1) / 2 > 0 && index + page - Math.floor((pageList - 1) / 2) < dataCount / nbToRender - 1)
                        return (
                            <li key={index}>
                                <button onClick={() => {
                                    if (page !== index + page - (pageList - 1) / 2)
                                        action(index + page - (pageList - 1) / 2, nbToRender)
                                }} className={ `px-3 py-2 leading-tight border ${page !== index + page - (pageList - 1) / 2 ? " text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}`}>
                                    {Math.floor(index + 1 - (pageList - 1) / 2 + page)}
                                </button>
                            </li>
                        );
                    return <span key={index}></span>;
                }))}
                {page + 2 < Math.floor(dataCount / nbToRender) - Math.floor((pageList - 1) / 2) - 1 && <li>
                    <button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">...</button>
                </li>}
                {dataCount / nbToRender > 1 &&<li>
                    <button onClick={() => {
                        action(((dataCount / nbToRender) > Math.floor(dataCount / nbToRender) ? 1 : 0) + Math.floor(dataCount / nbToRender) - 1, nbToRender)
                    }}
                        className={`px-3 py-2 leading-tight border ${page !== ((dataCount / nbToRender) > Math.floor(dataCount / nbToRender) ? 1 : 0) + Math.floor(dataCount / nbToRender) - 1 ? " text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700" : "z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"}`}
                    >
                        {(dataCount / nbToRender) > Math.floor(dataCount / nbToRender) ? Math.floor(dataCount / nbToRender) + 1 : Math.floor(dataCount / nbToRender)}
                    </button>
                </li>}
                <li>
                    <button onClick={() => {if (page < Math.floor(dataCount / nbToRender) ) action(page + 1, nbToRender)}}
                            disabled={(page + 1) * nbToRender > dataCount - 1}
                            className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                        <span className="sr-only">Next</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    </>)
}