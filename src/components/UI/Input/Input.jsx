import React, { useState } from "react";

import InputClasses from "./Input.module.css";

const Input = ({ text, name, type, inputChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    inputChange(inputValue);
  };
  console.log(inputValue);
  return (
    <label className={InputClasses[`input__block`]}>
      <p className={InputClasses[`input__name`]}>{text}</p>
      <input
        className={InputClasses.input}
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
        value={inputValue}
      />
    </label>
  );
};

export default Input;
