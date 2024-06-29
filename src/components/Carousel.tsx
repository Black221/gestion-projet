



export default function Carousel () {

    return (<>
        <div className="w-64 carousel rounded-box">
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div> 
            <div className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
            </div>
        </div>
    </>)
}


export function CarouselWith () {
    
    return (<>
        <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
            </div> 
            <div id="item2" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
            </div> 
            <div id="item3" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
            </div> 
            <div id="item4" className="carousel-item w-full">
                <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
            </div>
        </div> 
        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a> 
            <a href="#item2" className="btn btn-xs">2</a> 
            <a href="#item3" className="btn btn-xs">3</a> 
            <a href="#item4" className="btn btn-xs">4</a>
        </div>
    </>)
}