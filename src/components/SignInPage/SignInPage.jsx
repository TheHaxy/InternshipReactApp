import React, { useState } from "react";

import SignInPageClasses from "./SignInPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const SignInPage = () => {

  return (
    <>
      <Header />
      <div className={SignInPageClasses["signing__page"]}>
        <h1 className={SignInPageClasses["signing__title"]}>
          Create your free account
        </h1>
        <form noValidate={true} className={SignInPageClasses[`signing__form`]}>
          <Input text="First name" name="firstName" type="text" />
          <Input text="Last name" name="lastName" type="text" />
          <Input
            text="Email Address"
            name="email"
            type="email"
          />
          <Input text="Password" name="password" type="password" />
          <Button
            name="Create account"
            variant="contained__login"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
