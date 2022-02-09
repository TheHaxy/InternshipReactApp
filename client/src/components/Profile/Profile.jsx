import React, {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import voidUserImage from "../../assets/Group54.svg";

import ProfileClasses from "./Profile.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const profile = fetch("http://localhost:5000/api/profile", {
  method: "PATCH",
  headers: {
    'Authorization': localStorage.USER_TOKEN
  }
})
profile.then(res => res.json()).then(res => {
  localStorage.setItem("USER_DATA", JSON.stringify(res))
})

const Profile = () => {
  const reader = new FileReader();
  const navigate = useNavigate();
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("USER_DATA")))
  const [userImage, setUserImage] = useState(user.image);
  const [inputValue, setInputValue] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    description: user?.description
  });
  console.log(inputValue)

  // useEffect(() => {
  //   if (inputValue) setIsDisableBtn(false);
  // }, []);

  useEffect(() => {
    if (!localStorage.USER_TOKEN) navigate("/login", {replace: true});
  }, [localStorage.USER_TOKEN]);

  const editTextarea = (e) => {
    setInputValue({...inputValue, description: e.target.value});
  };

  const deleteAvatar = () => {
    setUserImage(voidUserImage);
    setIsDisableBtn(false);
  };

  const openFile = (e) => {
    const file = e.target.files[0];
    reader.onloadend = () => {
      const base64String = reader.result;
      setUserImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const saveChanges = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/profile", {
      method: "PATCH",
      headers: {
        'Authorization': localStorage.USER_TOKEN
      },
      body:{
        firstName: inputValue.firstName,
        lastName: inputValue.lastName,
        description: inputValue?.description,
        image: inputValue.image
      }
    })
  }

  return (
      <>
        <Header/>
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
                    value={inputValue?.description}
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
        <Footer/>
      </>
  );
};

export default Profile;
