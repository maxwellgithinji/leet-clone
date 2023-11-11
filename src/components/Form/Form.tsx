import type { ReactNode } from 'react';
import React from 'react';

export type FormProps = {
  headingText?: string;
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ headingText, children }) => {
  return (
    <form className="space-y-6 px-6 pb-4">
      <h3 className="text-xl font-medium text-white">{headingText}</h3>
      {children}
    </form>
  );
};

export default Form;
