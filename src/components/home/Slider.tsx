import { useCallback, useEffect, useState } from "react";
import "./slider.css";
import { ChevronLeft, ChevronRight } from "./Icons";
import { CaptionItem, SlideImg, SlideItem } from "../../types/slider";

interface ISlider {
    slides: SlideImg[];
    duration?: number;
}

export default function Slider({ slides, duration = 5000 }: ISlider) {

    const [data, setData] = useState<SlideImg[]>(slides);
    const [sliders, setSliders] = useState<React.ReactNode[]>(createSlides(slides));
    const [captions, setCaptions] = useState<React.ReactNode[]>(createCaptions(slides));


    const next = useCallback(( ) => {
        const [current, ...rest] = data;
        setData([...rest, current]);
    }, [data]);

    const prev = useCallback(() => {
        const [last, ...rest] = data.slice(-1);
        setData([last, ...rest]);
    }, [data]);

    useEffect(() => {
        setSliders(createSlides(data));
        setCaptions(createCaptions(data));
    }, [data]);

    
    // const getSlide = (index: number) => {
    //     if (index < 0) return slides[MAX];
    //     if (index > MAX) return slides[0];
    //     return slides[index];
    // }


    useEffect(() => {
        const interval = setInterval(() => {
            next();
            
        }, duration);

        return () => clearInterval(interval);
    }, [next, duration]);


    return (<>
        <div className="slider" id="slider">
            {captions[0]}
            <div className="left-col" id="left-col">
                {sliders[0]}
                {sliders[1]}
                {sliders[length - 1]}
            </div>
            <ul className="nav">
                <li className="slide-up" onClick={prev}>
                    <ChevronLeft  color="#FFF" />
                </li>
                <li className="slide-down" onClick={next}>
                    <ChevronRight color="#FFF" />
                </li>
            </ul>
        </div>
    </>)
}


const createSlides = (slides: SlideImg[]) => {
    return slides.map((slide, index) => {
        const position = index === 0 ? "current" : index === 1 ? "next" : "prev";
        return <Slide key={index + slides.length} {...slide} position={position} />
    });
}

const createCaptions = (slides: SlideImg[]) => {
    return slides.map((slide, index) => {
        const position = index === 0 ? "current" : index === 1 ? "next" : "prev";
        return <Caption key={index} {...slide} position={position} />
    });
}


function Slide ({ key, src, position }: SlideItem) {

    return (<>
        <div key={key} className={`slide ${position}`} style={{ 
            backgroundImage: `url(${src})`,
        }}>
        </div>
    </>)
}



function Caption({ key, title, description,  position }: CaptionItem) {

    return (<>
        <div key={key} className={`caption ${position}-caption`}>
            <div className="caption-heading">
                <h1>{title}</h1>
            </div>
            <div className="caption-subhead"><span>{description}</span></div>
            {/* <a className="btn" href="#">{btn}</a> */}
        </div>
    </>)
}