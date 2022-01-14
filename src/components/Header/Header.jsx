import React from "react";
import headerClasses from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className={headerClasses.header}>
      <Nav location="header" />
    </header>
  );
};

export default Header;
