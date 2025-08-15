import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="text-white mb-2" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="p-2 border border-green-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        {...props}
      />
    </div>
  );
};

export default Input;