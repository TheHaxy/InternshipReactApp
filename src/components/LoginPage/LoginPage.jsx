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

  const clickLoginBth = (e) => {
    let thisUser = usersStorage.find(item => item.password === formState.password.value);
    if (thisUser) {
      localStorage.setItem("LOGIN_USER", JSON.stringify(thisUser));
      navigate("/main-page", { replace: true });
    }
    else{
      e.preventDefault(e)
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
        >
          <Input
            text="Email Address"
            name="email"
            type="email"
            notValidText="Please enter your username or email address."
            setFormState={setFormState}
          />
          <Input
            text="Password"
            name="password"
            type="password"
            notValidText="Please enter a password."
            setFormState={setFormState}
          />
          <Button
            name="Log in" v
            variant="contained__login"
            onClick={(e) => {
              clickLoginBth(e);
            }
            }
          />
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
