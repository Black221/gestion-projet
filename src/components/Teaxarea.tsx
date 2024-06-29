import { useState } from "react"

interface Props {
    label: string;
    className: string;
    row: number;
    disabled: boolean;
    onChange: (value: any) => void;
}

export const Textarea = ({label, className, row, disabled, onChange} : Props) => {

    const [value, setValue] = useState<string>();

    return (<>
        <div className={className}>
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <textarea
                    disabled={disabled}
                    id="about"
                    value={value}
                    rows={row}
                    onChange={(e) => {
                        onChange(e.target.value)
                        setValue(e.target.value)
                    }}
                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    </>)
}