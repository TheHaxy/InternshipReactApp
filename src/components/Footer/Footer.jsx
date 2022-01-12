import React from 'react';
import footerClasses from './Footer.module.css'
import Nav from "../Nav/Nav";

const Footer = () => {
    return (
        <div className={footerClasses.footer}>
            <Nav location='footer'/>
            <section className={footerClasses[`copyright__info`]}>
                <p>© 2021 Justice-it. All rights reserved.</p>
                <p>© 2021 Justice-it. All rights reserved.</p>
            </section>
        </div>
    );
};

export default Footer;