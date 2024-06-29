import { useState } from "react"

interface Props {
    label: string;
    value: boolean;
    onChange: (value: any) => void
}


export default function Checkbox (props: Props) {

    const [checked, setChecked] = useState<boolean>(props.value);

    return (<>
        <div className="flex space-x-2 items-center">
            <input id={props.label} type="checkbox" checked={checked}  onChange={(e) => {
                setChecked(e.target.checked);
                props.onChange(e.target.checked);
            }}/>
            <label htmlFor={props.label}>{props.label}</label>
        </div>
    </>)
}