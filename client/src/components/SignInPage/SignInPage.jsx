import React, { useEffect, useState } from "react";

import { signinData } from "../../mockdata/appConstants";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import voidUserImage from "../../assets/Group54.svg";
import SignInPageClasses from "./SignInPage.module.css";

const SignInPage = () => {
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [formState, setFormState] = useState(signinData);
  const navigate = useNavigate();
  const validState = [];

  useEffect(() => {
    Object.keys(formState).map((i) => {
      validState.push(formState[i].isValid);
    });
    Object.keys(validState).map((i) => {
      if (validState.filter((state) => !state).length) setIsDisableBtn(true);
      else setIsDisableBtn(false);
    });
  }, [formState]);

  const submitForm = (e) => {
    e.preventDefault();
      const newUser = {
        firstName: formState.firstName.value,
        lastName: formState.lastName.value,
        email: formState.email.value,
        password: formState.password.value,
        image: JSON.stringify(voidUserImage),
      };
      const register = fetch('http://localhost:5000/api/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUser)
      })
    register.then(res => {
      if (res.status === 201) {
        const login = fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            email: newUser.email,
            password: newUser.password
          })
        })
      }
    })
  };

  return (
    <>
      <Header />
      <main className={SignInPageClasses["signing__page"]}>
        <h1 className={SignInPageClasses["signing__title"]}>
          Create your free account
        </h1>
        <form noValidate={true} className={SignInPageClasses[`signing__form`]}>
          <Input
            text="First name"
            name="firstName"
            type="text"
            notValidText="Please enter a first name."
            inputValue={inputValue}
            setInputValue={setInputValue}
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            text="Last name"
            name="lastName"
            type="text"
            notValidText="Please enter a last name."
            inputValue={inputValue}
            setInputValue={setInputValue}
            formState={formState}
            setFormState={setFormState}
          />
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
            name="Create account"
            variant="contained__login"
            isDisable={isDisableBtn}
            onClick={(e) => submitForm(e)}
          />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
