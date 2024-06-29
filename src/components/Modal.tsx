import { useRef } from "react";


interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {

    const ref = useRef<HTMLDivElement>(null);

    // close on click outside
    //eslint-disable-next-line
    const handleClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
            onClose();
        }
    }

    return (<>
        {open && <div onClick={handleClick} onPointerDown={handleClick} className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center z-[2000]">
            <div ref={ref} className="bg-white relative p-4 rounded-lg max-w-[80%] max-h-[80%] flex items-center justify-center">
                <button onClick={onClose} className="absolute top-[2%] right-[2%] text-2xl">X</button>
                {children}
            </div>
        </div>}
    </>)
}