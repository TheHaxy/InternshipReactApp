import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import { inputData } from "../../appConstants";

import LoginPageClasses from "./LoginPage.module.css";

const LoginPage = () => {
  const [formState, setFormState] = useState(inputData);
  const usersStorage = JSON.parse(localStorage.getItem("USERS_DATA"));
  const navigate = useNavigate();

  const findEmail = () => {
    let newMail = "";
    Object.keys(usersStorage).map((i) => {
      console.log(i);
      newMail = formState[i].email.value;
      console.log(newMail);
    });
    return newMail;
  };

  const clickLoginBth = () => {
    let thisUser = usersStorage.find(findEmail);
    if (thisUser.password === formState.password.value) {
      localStorage.setItem("LOGIN_USER", JSON.stringify(thisUser));
    }
  };
  return (
    <>
      <Header />
      <div className={LoginPageClasses["login__page"]}>
        <h1 className={LoginPageClasses["login__title"]}>
          Log in to your account
        </h1>
        <form
          noValidate={true}
          className={LoginPageClasses[`login__form`]}
          onSubmit={() => {
            navigate("/main-page", { replace: true });
            clickLoginBth();
          }}
        >
          <Input
            text="Email Address"
            name="email"
            type="email"
            setFormState={setFormState}
          />
          <Input
            text="Password"
            name="password"
            type="password"
            setFormState={setFormState}
          />
          <Button name="Log in" variant="contained__login" />
        </form>
        <p className={LoginPageClasses[`login__subtitle`]}>
          Don’t have a Times account?{" "}
          <Link to="/sign-in">
            <span>Create one</span>
          </Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
