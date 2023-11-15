import React from 'react';

export type TextInputProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
};

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type,
  label,
  placeholder,
  onChange,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        className="
                block w-full rounded-lg border-2 border-gray-500 bg-gray-600 p-2.5 text-white outline-none
                placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm
            "
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
