import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LoginPageClasses from "./LoginPage.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const LoginPage = () => {
  const emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  const passwordPattern =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const inputEmailChange = (inputValue, e) => {
    return emailPattern.test(inputValue);
  };
  return (
    <>
      <Header />
      <div className={LoginPageClasses["login__page"]}>
        <h1 className={LoginPageClasses["login__title"]}>
          Log in to your account
        </h1>
        <form noValidate={true} className={LoginPageClasses[`login__form`]}>
          <Input text="Email Address" name="email" type="email" />
          <Input text="Password" name="password" type="password" />
          <Button
            name="Log in"
            variant="contained__login"
            onClick={inputEmailChange()}
          />
        </form>
        <p className={LoginPageClasses[`login__subtitle`]}>
          Don’t have a Times account? <span>Create one</span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
