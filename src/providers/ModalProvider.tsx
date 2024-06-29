import { createContext, ReactNode, useState } from "react";



export const ModalContext = createContext<ModalProps>({} as ModalProps);


interface ModalProps {
    modalElement: React.ReactNode | null;
    setModalElement: (element: React.ReactNode | null) => void;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    onClose: () => void;
}


export const ModalProvider = ({ children } : { children: ReactNode}) => {

    const [modalElement, setModalElement] = useState<React.ReactNode | null>(null);
    const [modalOpen, setModalOpen] = useState<boolean>(false);


    const onClose = () => {
        setModalOpen(false);
        setModalElement(null);
    }

    return (
        <ModalContext.Provider value={{
            modalElement,
            setModalElement,
            modalOpen,
            setModalOpen,
            onClose
        }}>
            {children}
        </ModalContext.Provider>
    );
};