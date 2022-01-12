import ButtonClasses from './Button.module.css'
import React from 'react';

const Button = ({name, isDisable, variant}) => {
    return (
        <button className={ButtonClasses[`button__${variant}`]}>

            {name}
        </button>
    );
};

export default Button;