import React from "react";
import navClasses from "./Nav.module.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const Nav = ({ location }) => {
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
        <Link to="/login">
          <Button
            variant={`outlined__${location}`}
            name="Log in"
          />
        </Link>
        <Link to="/sign-in">
          <Button
            variant={`contained__${location}`}
            name="Sign in"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
