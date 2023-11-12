import React from 'react';

export type LinkProps = {
  href: string;
  text: string;
};

const Link: React.FC<LinkProps> = ({ href, text }) => {
  return (
    <a href={href} className="text-blue-700 hover:underline">
      {text}
    </a>
  );
};

export default Link;
