import type { ReactNode } from 'react';
import React from 'react';

export type ContainerProps = {
  children?: ReactNode;
  tailwindClasses?: string;
};

const Container: React.FC<ContainerProps> = ({ children, tailwindClasses }) => {
  const className: string = `h[calc(100vh-5rem)] ${tailwindClasses}`;
  return <div className={className}>{children}</div>;
};

export default Container;
