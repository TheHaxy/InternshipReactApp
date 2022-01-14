import React, { useEffect, useState } from "react";

import SignInPageClasses from "./SignInPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const SignInPage = () => {
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [formState, setFormState] = useState({
    firstName: {
      value: "",
      isValid: false,
    },
    lastName: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  });

  const validState = [];
  useEffect(() => {
    Object.keys(formState).map((i) => {
      validState.push(formState[i].isValid);
    });
    Object.keys(validState).map((i) => {
      console.log(validState.filter((state) => !state).length);
      if (validState.filter((state) => !state).length) setIsDisableBtn(true);
      else setIsDisableBtn(false);
    });
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
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
