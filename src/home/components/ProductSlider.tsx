import {useEffect, useRef, useState} from "react";
import ProductCard from "../../components/ProductCard";


interface ICardSlider {
    items: ICard[];
}

interface ICard {
    id: string;
    img: string[];
    name: string;
    price: number;
    description?: string;
    caracteristic?: string;
}

export default function ProductSlider ({items}:ICardSlider) {


   
    // const responsive = {
    //     0: { items: 1 },
    //     568: { items: 2 },
    //     1024: { items: 4 },
    // };
    // const [data, setData] = useState([]);
    // const carousel = useRef(null);

    useEffect(() => {

        
    }, [items])

    return (
        <div  id="produits" className={`relative   overflow-hidden`}>
            <div className={`md:bg-slider-top bg-cyan-600 pt-4 flex items-center`}>
                <div className={`text-white md:w-[41.5%]   h-full`}>
                    <div className={`md:w-[75%] mx-auto border-b-2 border-white h-full pb-4 pl-10 text-2xl`}>Nos produits</div>
                </div>
            </div>
            <div className={`bg-cyan-600 relative md:p-20 py-10  md:pl-24 pl-12 min-h-[24rem]`}>
                {/* <AliceCarousel
                    key="carousel"
                    mouseTracking
                    items={data}
                    responsive={responsive}
                    disableButtonsControls
                    controlsStrategy="alternate"
                    disableDotsControls
                    ref={carousel}
                /> */}
                <div className="hidden md:flex justify-end space-x-4 mt-4">
                    <button className={`px-3 py-1 bg-white rounded`} onClick={() => console.log("")}>Précédant</button>
                    <button className={`px-3 py-1 bg-white rounded`} onClick={() => console.log("")}>Suivant</button>
                </div>
            </div>
            <div className={`md:bg-slider-bottom bg-main-bg flex items-center justify-end`}>
                <div className={`text-white w-[41.5%] h-full`}>
                    <div className={`md:w-[75%] mx-auto border-t-2 border-white h-full pb-4 text-center text-2xl pt-4`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}