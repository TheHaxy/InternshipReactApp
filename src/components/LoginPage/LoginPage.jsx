import React from "react";

import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import LoginPageClasses from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <Header />
      <div className={LoginPageClasses["login__page"]}>
        <h1 className={LoginPageClasses["login__title"]}>
          Log in to your account
        </h1>
        <form noValidate={true} className={LoginPageClasses[`login__form`]}>
          <Input text="Email Address" name="email" type="email" notValidText='Please enter your username or email address.'/>
          <Input text="Password" name="password" type="password" notValidText='Please enter a password.'/>
          <Button name="Log in" variant="contained__login" />
        </form>
        <p className={LoginPageClasses[`login__subtitle`]}>
          Don’t have a Times account? <Link to="/sign-in"><span>Create one</span></Link>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
