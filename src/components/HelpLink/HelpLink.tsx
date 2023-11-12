import React from 'react';

export type HelpLinkProps = {
  question: string;
  link: React.ReactNode;
};

const HelpLink: React.FC<HelpLinkProps> = ({ question, link }) => {
  return (
    <div className="text-sm font-medium text-gray-300">
      {question} {link}
    </div>
  );
};

export default HelpLink;
