import { useState } from "react";


export interface SelectProps {
    label: string;
    className?: string;
    onChange: (value: string) => void;
    options: string[];
}

export default function Select(
    { label, onChange, options, className = "" }: SelectProps
) {

    const [value, setValue] = useState<string>(options[0]);

    const getValue = (value: string) => {
        onChange(value);
        setValue(value);
    }

    return (<>
        <div className={`w-full flex flex-col space-y-2 ${className}`}>
            <label htmlFor="name">{label}</label>
            <select id="name" className="border p-2 rounded-md" value={value} onChange={(e) => getValue(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option}>{
                        option
                    }</option>
                ))}
            </select>
        </div>
    </>)
}