import type { ReactNode } from 'react';
import React from 'react';

export type CanvasProps = {
  children?: ReactNode;
};

const Canvas: React.FC<CanvasProps> = ({ children }) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-600 to-black">
      <div className="mx-auto max-w-7xl" />
      {children}
    </div>
  );
};

export default Canvas;
