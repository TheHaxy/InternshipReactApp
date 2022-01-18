import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import { loginData } from "../../appConstants";

import LoginPageClasses from "./LoginPage.module.css";

const LoginPage = () => {
  const [formState, setFormState] = useState(loginData);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const usersStorage = JSON.parse(localStorage.getItem("USERS_DATA"));
  const navigate = useNavigate();
  const validState = [];

  const clickLoginBth = (e) => {
    e.preventDefault();
    const thisUser = usersStorage.find(
      (item) => item.email === formState.email.value
    );
    if (thisUser && formState.password.value === thisUser.password) {
      localStorage.setItem("LOGIN_USER", JSON.stringify(thisUser));
      navigate("/main-page", { replace: true });
    } else {
      e.preventDefault();
    }
  };

  useEffect(() => {
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
      <main className={LoginPageClasses["login__page"]}>
        <h1 className={LoginPageClasses["login__title"]}>
          Log in to your account
        </h1>
        <form noValidate={true} className={LoginPageClasses[`login__form`]}>
          <Input
            text="Email Address"
            name="email"
            type="email"
            notValidText="Please enter your username or email address."
            inputValue={inputValue}
            setInputValue={setInputValue}
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            text="Password"
            name="password"
            type="password"
            notValidText="Please enter a password."
            inputValue={inputValue}
            setInputValue={setInputValue}
            formState={formState}
            setFormState={setFormState}
          />
          <Button
            name="Log in"
            v
            variant="contained__login"
            onClick={(e) => {
              clickLoginBth(e);
            }}
            isDisable={isDisableBtn}
          />
        </form>
        <p className={LoginPageClasses[`login__subtitle`]}>
          Don’t have a Times account?{" "}
          <Link to="/sign-in">
            <span>Create one</span>
          </Link>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
