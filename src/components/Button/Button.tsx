import React from 'react';

type ButtonClass = 'primary' | 'secondary';

export type ButtonProps = {
  buttonClass: ButtonClass;
  text: string;
  buttonType?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ buttonClass, text, buttonType }) => {
  let className: string = '';

  switch (buttonClass) {
    case 'primary':
      className =
        'rounded-md border-2 border-transparent bg-brand-orange px-2 py-1 font-medium text-white transition duration-300 ease-in-out hover:border-2 hover:border-brand-orange hover:bg-white hover:text-brand-orange';
      break;
    case 'secondary':
      className =
        'w-full text-white focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s';
      break;
    default:
      // Handle other cases or provide a default class
      break;
  }

  let button: React.ReactNode;
  switch (buttonType) {
    case 'submit':
      button = (
        <button className={className} type="submit">
          {text}
        </button>
      );
      break;
    default:
      button = (
        <button className={className} type="button">
          {text}
        </button>
      );
      break;
  }

  return button;
};

export default Button;
