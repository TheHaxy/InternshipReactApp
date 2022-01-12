import ButtonClasses from './Button.module.css'
import React from 'react';

const Button = ({name, isDisable, variant, onClick}) => {
    return (
        <button className={ButtonClasses[`button__${variant}`]} onClick={onClick}>

            {name}
        </button>
    );
};

export default Button;