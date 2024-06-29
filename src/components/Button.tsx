
interface Props {
    label: React.ReactNode;
    className?: string;
    onClick?: () => void;
    backgroundColor?: string;
    disabled?: boolean;
}

export default function Button ({ label, className = "", backgroundColor = "bg-main", onClick, disabled = false } : Props) {

    // filter border and rounded corners
    const hasBorder: boolean = className.includes("border");
    const hasRounded: boolean = className.includes("rounded");

    return (<>
        <button disabled={disabled}
            className={`${className} ${backgroundColor} p-2 px-4 ${!hasBorder ? "border" : ""} ${!hasRounded ? "rounded-md" : ""}`} 
            onClick={onClick}
        >
            {label}
        </button>
    </>)
}