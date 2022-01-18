import React, { useState } from "react";

import InputClasses from "./Input.module.css";
import { Patterns } from "../../../appConstants";

const Input = ({
  text,
  name,
  type,
  notValidText,
  formState,
  setFormState,
  inputValue,
  placeholder,
  setInputValue,
}) => {
  const [isValid, setIsValid] = useState(true);
  console.log(inputValue);
  const newInputValue = (e) => {
    if (formState) {
      setFormState({
        ...formState,
        [name]: {
          value: e.target.value,
          isValid: Patterns[name].test(e.target.value),
        },
      });
      if (!Patterns[name].test(e.target.value) && e.target.value) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    } else if (inputValue) {
      setInputValue({ ...inputValue, [name]: e.target.value });
    }
  };

  return (
    <label className={InputClasses[`input__block`]}>
      {text && <p className={InputClasses[`input__name`]}>{text}</p>}
      <input
        className={InputClasses[`input__${isValid}`]}
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue[name]}
        onChange={(e) => newInputValue(e)}
      />
      {!isValid && (
        <p className={InputClasses[`input__not__valid__text`]}>
          {notValidText}
        </p>
      )}
    </label>
  );
};

export default Input;
