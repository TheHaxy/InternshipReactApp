import React from "react";

import Button from "../UI/Button/Button";

import ProfileClasses from "./ProfileCard.module.css";

const ProfileCard = ({ userImage, OnChange, OnClick, location, user }) => {
  return (
    <div className={ProfileClasses[`${location}__user__avatar__card`]}>
      <div className={ProfileClasses[`user__avatar__container`]}>
        <img src={userImage} alt="User avatar" />
      </div>
      {location === "profile" ? (
        <>
          <div className={ProfileClasses[`upload__button`]}>
            <Button variant="upload" name="Change photo" />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              className={ProfileClasses[`upload`]}
              onChange={OnChange}
            />
          </div>

          <p
            className={ProfileClasses[`delete__avatar__text`]}
            onClick={OnClick}
          >
            Delete photo
          </p>
        </>
      ) : (
        <>
          <p className={ProfileClasses[`user__name`]}>
            {user.firstName} {user.lastName}
          </p>
          <p className={ProfileClasses[`user__description`]}>
            {user.description}
          </p>
        </>
      )}
    </div>
  );
};

export default ProfileCard;
