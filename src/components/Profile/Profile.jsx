import React, { useEffect, useMemo, useState } from "react";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import voidUserImage from "../../assets/Group54.svg";

import ProfileClasses from "./Profile.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("LOGIN_USER"));
  const [userImage, setUserImage] = useState(user.image);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [inputValue, setInputValue] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    description: user.description,
  });
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
    console.log(user);
    localStorage.setItem("LOGIN_USER", JSON.stringify(user));
    setIsDisableBtn(true);
  };

  useEffect(() => {
    if (inputValue) setIsDisableBtn(false);
  }, [inputValue]);

  const editTextarea = (e) => {
    setInputValue({ ...inputValue, description: e.target.value });
  };

  return (
    <>
      <Header />
      <div className={ProfileClasses[`profile__page`]}>
        <h1 className={ProfileClasses[`profile__title`]}>Profile</h1>
        <section className={ProfileClasses.profile}>
          <ProfileCard OnClick={() => deleteAvatar()} OnChange={(e) => openFile(e)} userImage={userImage} location="profile" user={user}/>
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
      </div>
      <Footer />
    </>
  );
};

export default Profile;
