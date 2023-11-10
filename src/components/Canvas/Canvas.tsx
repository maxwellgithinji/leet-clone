import React from 'react';

export type CanvasProps = {
  navbar?: React.ReactNode;
  container?: React.ReactNode;
};

const Canvas: React.FC<CanvasProps> = ({ navbar, container }) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-600 to-black">
      <div className="mx-auto max-w-7xl" />
      {navbar}
      {container}
    </div>
  );
};

export default Canvas;
