import { Link } from "react-router-dom";


interface ICard {
    id: string;
    img: string[];
    name: string;
    price: number;
    description?: string;
    caracteristic?: string;
}


export default function ProductCard ({id, img, name, price, description, caracteristic}: ICard)  {

  
    const showProduct = (product: ICard) => {
        localStorage.setItem("product", JSON.stringify(product))
    }

    const addToCart = (product: ICard) => {
        const cart = localStorage.getItem("cart");
        if (cart) {
            const cartArray = JSON.parse(cart);
            cartArray.push(product);
            localStorage.setItem("cart", JSON.stringify(cartArray));
        } else {
            localStorage.setItem("cart", JSON.stringify([product]));
        }
    }

    return (
        <div className={`relative p-5 md:min-w-[250px] md:max-w-[250px] md:h-[380px] w-64 h-96 bg-white shadow drop-shadow rounded-xl flex flex-col items-center justify-between`}>

            <Link to={`/boutique#product`} onClick={() => {showProduct({id, img, name, price, description, caracteristic})}}>
                <div className={`overflow-hidden flex items-center max-h-48 min-h-[10rem]`}>
                    <img src={img ? img[0] : ""} loading={"lazy"} alt={name}/>
                </div>
                <div className={`flex-1 text-center space-y-1`} >
                    <div className={`md:text-xl text-lg font-semibold`}>{name}</div>
                    <div className={"py-2 text-cyan-600"}>{price} <span className={"text-sm font-semibold text-black"}> FCFA</span></div>
                </div>
            </Link>
            <div>
                <button onClick={() => addToCart({id, img, name, price})} className={`md:px-8 px-4 md:py-2 py-1 bg-main-bg text-white font-semibold rounded-full`}>Ajouter au panier</button>
            </div>
        </div>
    )
}
