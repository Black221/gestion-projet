import { useState, Dispatch, SetStateAction } from "react";

interface Props {
  id?: string;
  label: string;
  type?: string;
  floating?: boolean;
  placeholder?: string;
  onChange: (value: any) => void;
  value: string | number; // Ajout de la propriété value
  className?: string;
}

export default function Input({
  id,
  label,
  onChange,
  value, // Ajout de value dans les props destructurées
  type = "text",
  placeholder,
  className = "",
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const _className = className.includes("w-")
    ? className
    : className + " w-full";

  return (
    <div className={`flex flex-col space-y-1 ${_className}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="border p-2 rounded-md"
        value={value}
        onChange={handleChange}
        autoComplete={type === "password" ? "current-password" : "off"}
      />
    </div>
  );
}
