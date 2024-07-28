import React from "react";

const Button = ({ children, onClick, type = "button", className = "", style }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-white font-bold w-1/2 py-2 px-4 rounded focus:outline-none focus:ring-2  focus:ring-opacity-75  ${className=""}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
