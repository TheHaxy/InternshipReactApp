import React, { useEffect, useState } from "react";

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
  setInputValue,
}) => {
  const [isValid, setIsValid] = useState(true);
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
    } else {
      setInputValue({ ...inputValue, [name]: e.target.value });
    }
  };

  return (
    <label className={InputClasses[`input__block`]}>
      <p className={InputClasses[`input__name`]}>{text}</p>
      <input
        className={InputClasses[`input__${isValid}`]}
        type={type}
        name={name}
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
