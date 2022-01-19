import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import voidUserImage from "../../assets/Group54.svg";

import ProfileClasses from "./Profile.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Profile = () => {
  const usersStorage = JSON.parse(localStorage.getItem("USERS_DATA"));
  const user = JSON.parse(localStorage.getItem("LOGIN_USER"));
  const navigate = useNavigate()
  const [userImage, setUserImage] = useState(user.image);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    description: user.description,
  });

  useEffect(() => {
    if (inputValue) setIsDisableBtn(false);
  }, [inputValue]);

  useEffect(() => {
    if (!localStorage.LOGIN_USER) navigate("/main-page", { replace: true })
  }, [localStorage.LOGIN_USER])

  const editTextarea = (e) => {
    setInputValue({ ...inputValue, description: e.target.value });
  };

  const deleteAvatar = () => {
    setUserImage(voidUserImage);
    setIsDisableBtn(false);
  };

  const openFile = (e) => {
    setUserImage(e.target.value);
    setIsDisableBtn(false);
  };

  const saveChanges = (e) => {
    e.preventDefault();
    user.image = userImage;
    user.firstName = inputValue.firstName;
    user.lastName = inputValue.lastName;
    user.description = inputValue.description;
    setIsDisableBtn(true);
    usersStorage.map((item) => {return item.email === user.email && [
      item.firstName = user.firstName,
      item.lastName = user.lastName,
      item.description = user.description,
      item.image = user.image,
    ]
    })
    localStorage.setItem("LOGIN_USER", JSON.stringify(user));
    localStorage.setItem("USERS_DATA", JSON.stringify(usersStorage));
  };

  return (
    <>
      <Header />
      <main className={ProfileClasses[`profile__page`]}>
        <h1 className={ProfileClasses[`profile__title`]}>Profile</h1>
        <section className={ProfileClasses.profile}>
          <ProfileCard
            OnClick={() => deleteAvatar()}
            OnChange={(e) => openFile(e)}
            userImage={userImage}
            location="profile"
            user={user}
          />
          <form className={ProfileClasses[`profile__form`]}>
            <div className={ProfileClasses[`profile__form__input_name`]}>
              <Input
                text="First Name"
                name="firstName"
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
              <Input
                text="Last Name"
                name="lastName"
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </div>
            <label>
              <p className={ProfileClasses[`textarea__text`]}>Description</p>
              <textarea
                className={ProfileClasses.textarea}
                onChange={(e) => editTextarea(e)}
                value={inputValue.description}
              />
            </label>
            <Button
              variant="contained__header"
              name="Save Changes"
              onClick={(e) => saveChanges(e)}
              isDisable={isDisableBtn}
            />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
