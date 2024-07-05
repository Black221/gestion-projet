

interface Icon {    
    name: string;    
    size: number;    
    color: string;    
    onClick: () => void;
}

export default function Icon ({ name, size, color, onClick}: Icon) {

    return(<>
        <button className="flex flex-wrap items-center justify-center  p-1 rounded-full" onClick={onClick}>
            <i className={name} style={{fontSize: size, color: color}} ></i>
        </button>
    </>)
}