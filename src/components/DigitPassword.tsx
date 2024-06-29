



interface IDigitPassword {
    length: number;
    onChange: (value: string) => void;
    value: string;
}


export default function DigitPassword({ length, onChange, value} : IDigitPassword) {


    return (<>
        <form className="max-w-sm mx-auto">
            <div className="flex items-center justify-center space-x-2">
                {[...Array(length)].map((_, i) => (
                    <Digit key={i} id={i} code={value} onChange={()=>{}} />
                ))}
            </div>
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please introduce the 6 digit code we sent via email.</p>
        </form>
    </>)
}


interface IDigit {
    id: number;
    code: string;
    onChange: () => void;
}

export function Digit ({ id, code, onChange } : IDigit) {

    
    return (<>
        <div>
            <label htmlFor={"code-" + id} className="sr-only">{"code-" + id}</label>
            <input type="text" maxLength={1} data-focus-input-init data-focus-input-prev={"code-" + (id - 1)} id={"code-" + id} className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 " required />
        </div>
    </>)
}