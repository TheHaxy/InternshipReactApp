import React, { useEffect, useState } from "react";

import { inputData } from "../../appConstants";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import SignInPageClasses from "./SignInPage.module.css";

const SignInPage = () => {
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [formState, setFormState] = useState(inputData);
  const validState = [];
  let usersArray = [];

  const submitForm = (e) => {
    e.preventDefault();
    usersArray = localStorage.USERS_DATA
      ? JSON.parse(localStorage.getItem("USERS_DATA"))
      : [];
    usersArray.push({
      name: `${formState.firstName.value} ${formState.lastName.value}`,
      email: formState.email.value,
      password: formState.password.value,
    });
    localStorage.setItem("USERS_DATA", JSON.stringify(usersArray));
    console.log(usersArray);
  };

  useEffect(() => {
    Object.keys(formState).map((i) => {
      validState.push(formState[i].isValid);
    });
    Object.keys(validState).map((i) => {
      if (validState.filter((state) => !state).length) setIsDisableBtn(true);
      else setIsDisableBtn(false);
    });
    console.log(formState);
  }, [formState]);
  return (
    <>
      <Header />
      <div className={SignInPageClasses["signing__page"]}>
        <h1 className={SignInPageClasses["signing__title"]}>
          Create your free account
        </h1>
        <form noValidate={true} className={SignInPageClasses[`signing__form`]}>
          <Input
            text="First name"
            name="firstName"
            type="text"
            notValidText="Please enter a first name."
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            text="Last name"
            name="lastName"
            type="text"
            notValidText="Please enter a last name."
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            text="Email Address"
            name="email"
            type="email"
            notValidText="Please enter your username or email address."
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            text="Password"
            name="password"
            type="password"
            notValidText="Please enter a password."
            formState={formState}
            setFormState={setFormState}
          />
          <Button
            name="Create account"
            variant="contained__login"
            isDisable={isDisableBtn}
            onClick={(e) => submitForm(e)}
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
