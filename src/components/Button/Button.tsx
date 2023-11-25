import React from 'react';

type ButtonClass = 'primary' | 'secondary' | 'link' | 'topbar';

export type ButtonProps = {
  buttonClass: ButtonClass;
  text: string;
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({
  buttonClass,
  text,
  buttonType,
  onClick,
}) => {
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

    case 'link':
      className = 'underline text-blue-700 hover:text-blue-500';
      break;
    case 'topbar':
      className = 'cursor-pointer rounded bg-dark-fill-3 px-2 py-1';
      break;

    default:
      // Handle other cases or provide a default class
      break;
  }

  let button: React.ReactNode;
  switch (buttonType) {
    case 'submit':
      button = (
        <button className={className} type="submit" onClick={onClick}>
          {text}
        </button>
      );
      break;
    default:
      button = (
        <button className={className} type="button" onClick={onClick}>
          {text}
        </button>
      );
      break;
  }

  return button;
};

export default Button;
