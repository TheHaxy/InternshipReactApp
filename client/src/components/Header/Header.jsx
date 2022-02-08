import React from "react";

import Nav from "../Nav/Nav";

import headerClasses from "./Header.module.css";

const Header = () => {
  return (
    <header className={headerClasses.header}>
      <Nav location="header" />
    </header>
  );
};

export default Header;
