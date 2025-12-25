import React from "react";

const Card = ({ children, className = "", hover = false, border = false }) => {
  const cardClasses = `
    card 
    ${hover ? "hover:transform hover:-translate-y-1 hover:shadow-lg" : ""}
    ${border ? "border border-gray-200" : ""}
    ${className}
  `;

  return <div className={cardClasses.trim()}>{children}</div>;
};

export default Card;
