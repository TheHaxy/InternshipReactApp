import React from "react";
import navClasses from "./Nav.module.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
  console.log(localStorage.LOGIN_USER);
  return (
    <nav className={navClasses[`${location}__nav`]}>
      <Link to="/main-page">
        <Logo
          className={navClasses[`${location}__logo`]}
          src={Logo}
          alt="Logo"
        />
      </Link>

      <div className={navClasses[`header__buttons`]}>
        {!localStorage.LOGIN_USER ? (
          <>
            <Link to="/login">
              <Button variant={`outlined__${location}`} name="Log in" />
            </Link>
            <Link to="/sign-in">
              <Button variant={`contained__${location}`} name="Sign in" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/main-page">
              <Button variant={`nolined__${location}`} name="All articles" />
            </Link>
            <Link to="/main-page">
              <Button variant={`nolined__${location}`} name="My articles" />
            </Link>
            <Link to="/main-page">
              <Button variant={`nolined__${location}`} name="Add article" />
            </Link>
            <Link to="/main-page" style={{ marginRight: "50px" }}>
              <Button variant={`nolined__${location}`} name="Profile" />
            </Link>
            <Link to="/login">
              <Button
                variant={`contained__${location}`}
                name="Logout"
                onClick={() => localStorage.removeItem("LOGIN_USER")}
              />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
