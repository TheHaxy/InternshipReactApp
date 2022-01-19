import ButtonClasses from "./Button.module.scss";

import React from "react";

const Button = ({ name, isDisable, variant, onClick }) => {
  return (
    <button
      className={`${ButtonClasses[`button`]} ${
        ButtonClasses[`button__${variant}`]
      }`}
      onClick={onClick}
      disabled={isDisable}
    >
      {name}
    </button>
  );
};

export default Button;
