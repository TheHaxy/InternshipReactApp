import React, { useEffect, useState } from "react";

import { signinData } from "../../appConstants";
import { useNavigate } from "react-router-dom";
import voidUserImage from "../../assets/Group54.svg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import SignInPageClasses from "./SignInPage.module.css";

const SignInPage = () => {
  const [usersStorage, setUsersStorage] = useState([]);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [formState, setFormState] = useState(signinData);
  const navigate = useNavigate();
  const validState = [];
  const submitForm = (e) => {
    e.preventDefault();
    console.log(usersStorage);
    const checkUser = usersStorage.find(
      (item) => item.email === formState.email.value
    );
    if (!checkUser) {
      const newUser = {
        firstName: formState.firstName.value,
        lastName: formState.lastName.value,
        email: formState.email.value,
        password: formState.password.value,
        image: voidUserImage,
      };
      usersStorage.push(newUser);
      localStorage.setItem("USERS_DATA", JSON.stringify(usersStorage));
      localStorage.setItem("LOGIN_USER", JSON.stringify(newUser));
      navigate("/main-page", { replace: true });
    } else {
      localStorage.setItem("USERS_DATA", JSON.stringify(usersStorage));
      setIsDisableBtn(true);
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

  useEffect(() => {
    if (localStorage.USERS_DATA)
      setUsersStorage(JSON.parse(localStorage.getItem("USERS_DATA")));
  });

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
