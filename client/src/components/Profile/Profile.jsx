import React, {useContext, useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import voidUserImage from "../../assets/Group54.svg";

import ProfileClasses from "./Profile.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";
import axios from "axios";

const Profile = () => {
  const reader = new FileReader();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    firstName: "...",
    lastName: "...",
    description: "..."
  });

  useEffect(() => {
    if (!localStorage.USER_TOKEN) navigate("/login", {replace: true});
  }, [localStorage.USER_TOKEN]);

  useEffect(() => {
    axios.patch("http://localhost:5000/api/profile", {}, {
      headers: {'Authorization': localStorage.USER_TOKEN}
    }).then(res => setInputValue(res.data))
    localStorage.setItem("USER_DATA", JSON.stringify(inputValue))
  }, [localStorage.USER_DATA])

  const editTextarea = (e) => {
    setInputValue({...inputValue, description: e.target.value});
  };

  const deleteAvatar = () => {
    setInputValue({...inputValue, image: voidUserImage});
  };

  const openFile = (e) => {
    const file = e.target.files[0];
    reader.onloadend = () => {
      const base64String = reader.result;
      setInputValue({...inputValue, image: base64String});
    };
    reader.readAsDataURL(file);
  };

  const saveChanges = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/profile", {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': localStorage.USER_TOKEN
      },
      body: JSON.stringify(inputValue)
    })
    setInputValue(inputValue)
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
                location="profile"
                user={inputValue}
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
              />
            </form>
          </section>
        </main>
        <Footer/>
      </>
  );
};

export default Profile;
