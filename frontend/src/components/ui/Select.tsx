import React from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange, label, placeholder }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-white mb-2">{label}</label>}
      <select
        className="bg-black text-white border border-green-600 rounded p-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;