import React from 'react';
import navClasses from "./Nav.module.css";
import {ReactComponent as Logo} from "../../assets/Logo.svg";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Nav = ({location}) => {
    const navigate = useNavigate();
    return (
        <nav className={navClasses[`${location}__nav`]}>
            <div className={navClasses.wrap}>
                <Logo className={navClasses[`${location}__logo`]} src={Logo} alt='Logo'/>
                <div className={navClasses[`header__buttons`]}>
                    <Button variant={`outlined__${location}`} name='Log in' onClick={() => navigate('/login')}/>
                    <Button variant={`contained__${location}`} name='Sign in'/>
                </div>
            </div>
        </nav>
    );
};

export default Nav;