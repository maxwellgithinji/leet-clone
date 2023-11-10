import React from 'react';

export type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="rounded-md border-2 border-transparent bg-brand-orange px-2 py-1
            font-medium text-white transition duration-300 ease-in-out hover:border-2
            hover:border-brand-orange hover:bg-white hover:text-brand-orange"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
