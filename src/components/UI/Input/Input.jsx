import React, { useState } from "react";

import { Patterns } from "../../../appConstants";

import InputClasses from "./Input.module.css";

const Input = ({ text, name, type }) => {
  const [isValid, setIsValid] = useState(true)

  const handleChange = (e) => {
    if (!Patterns[e.target.name].test(e.target.value) && e.target.value) setIsValid(false)
    else setIsValid(true)
  };

  return (
    <label className={InputClasses[`input__block`]}>
      <p className={InputClasses[`input__name`]}>{text}</p>
      <input
        className={InputClasses[`input__${isValid}`]}
        type={type}
        name={name}
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default Input;
