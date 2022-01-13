import React from "react";

import SignInPageClasses from "./SignInPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const SignInPage = () => {
  const emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  const passwordPattern =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const inputEmailChange = (inputValue) => {
    return emailPattern.test(inputValue);
  };
  return (
    <>
      <Header />
      <div className={SignInPageClasses["signing__page"]}>
        <h1 className={SignInPageClasses["signing__title"]}>
          Create your free account
        </h1>
        <form noValidate={true} className={SignInPageClasses[`signing__form`]}>
          <Input text="First name" name="first_name" type="text" />
          <Input text="Last name" name="last_email" type="text" />
          <Input
            text="Email Address"
            name="email"
            type="email"
            inputChange={inputEmailChange()}
          />
          <Input text="Password" name="password" type="password" />
          <Button
            name="Create account"
            variant="contained__login"
            onClick={inputEmailChange()}
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
