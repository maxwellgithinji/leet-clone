import type { ReactNode } from 'react';
import React from 'react';

export type FormProps = {
  headingText?: string;
  children: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

const Form: React.FC<FormProps> = ({ headingText, children, onSubmit }) => {
  return (
    <form className="space-y-6 px-6 pb-4" onSubmit={onSubmit}>
      <h3 className="text-xl font-medium text-white">{headingText}</h3>
      {children}
    </form>
  );
};

export default Form;
