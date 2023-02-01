import React from "react";
import "../assets/styles/components/button.scss";

const Button = ({ children }) => {
  return (
    <div className="button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </div>
  );
};

export default Button;