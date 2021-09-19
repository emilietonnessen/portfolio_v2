import React from 'react';

interface IParagraph {
  children: React.ReactNode;
}

const Paragraph: React.FC<IParagraph> = ({ children }) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;

export const StrongText: React.FC<IParagraph> = ({ children }) => {
  return <span className="paragraph--highlight">{children}</span>;
};
