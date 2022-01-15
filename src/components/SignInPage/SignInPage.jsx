import React, { useEffect, useState } from "react";

import { signinData } from "../../appConstants";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import SignInPageClasses from "./SignInPage.module.css";

const SignInPage = () => {
  let usersStorage = JSON.parse(localStorage.getItem("USERS_DATA"));
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [formState, setFormState] = useState(signinData);
  const navigate = useNavigate();
  const validState = [];
  let usersArray = [];

  const submitForm = (e) => {
    e.preventDefault();
    if (localStorage.USERS_DATA) {
      usersArray = JSON.parse(localStorage.getItem("USERS_DATA"));
    }
    const checkUser = usersStorage.find(item => item.email === formState.email.value);
    if (!checkUser) {
      usersArray.push({
        name: `${formState.firstName.value} ${formState.lastName.value}`,
        email: formState.email.value,
        password: formState.password.value
      });
      localStorage.setItem("USERS_DATA", JSON.stringify(usersArray));
      usersStorage = JSON.parse(localStorage.getItem("USERS_DATA"));
      localStorage.setItem("LOGIN_USER", JSON.stringify(usersArray.pop()));
      navigate("/main-page", { replace: true });

    } else{
      localStorage.setItem("USERS_DATA", JSON.stringify(usersArray))
      setIsDisableBtn(true)
    }
  };
  useEffect(() => {
    console.log(formState);
    Object.keys(formState).map((i) => {
      validState.push(formState[i].isValid);
    });
    Object.keys(validState).map((i) => {
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
            setFormState="Please enter your username or email address."
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
