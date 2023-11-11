import React from 'react';

export type CanvasProps = {
  navbar?: React.ReactNode;
  container?: React.ReactNode;
  modal?: React.ReactNode;
};

const Canvas: React.FC<CanvasProps> = ({ navbar, container, modal }) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-600 to-black">
      <div className="mx-auto max-w-7xl" />
      {navbar}
      {container}
      {modal}
    </div>
  );
};

export default Canvas;
