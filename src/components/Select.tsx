import { useState } from "react";

export interface SelectProps {
  label: string;
  value: string;
  className?: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function Select({
  label,
  value,
  onChange,
  options,
  className = "",
}: SelectProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`w-full flex flex-col space-y-2 ${className}`}>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        className="border p-2 rounded-md"
        value={value}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
