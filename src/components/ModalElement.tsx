

interface ModalElementProps {
    title: string;
    content : React.ReactNode;
    buttons: React.ReactNode;
}

export default function ModalElement({ title, content, buttons }: ModalElementProps) {

    return (
        <div className="flex flex-col items-center justify-center space-y-6 ">
            <h2 className="text-2xl capitalize font-bold">{title}</h2>
            <div className="flex flex-col items-center space-y-5">
                {content}
                {buttons}
            </div>
        </div>
    )
}