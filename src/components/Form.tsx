
interface Props {
    items: Array<Item>;
    className?: string;
    display?: "linear" | "grid" | "flex"
    onSubmit?: (e: unknown) => void;
}

interface Item {
    label : string;
    type : "text" | "textarea" | "file" | "number" | "select" | "checkbox" | "radio"
}

export default function Form ( {items, onSubmit, className}: Props) {


    return(<>
        <form onSubmit={onSubmit} className={className}>
            {items.map(item => renderItem(item))}
        </form>
    </>)
}


const renderItem = (item: Item) => {

    switch (item.type) {
        case "checkbox":
            return <div>checkbox</div>
        case "select":
            return <select></select>
        case "file":
            return <div>file</div>
        case "number":
            return <div>number</div>
        case "text":
            return <div>text</div>
        case "textarea":
            return <textarea name="" id="" cols={30} rows={10}></textarea>
        case "radio":
            return <div>radio</div>
    }
}