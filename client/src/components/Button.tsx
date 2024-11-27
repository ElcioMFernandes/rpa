import React from 'react';
import { ButtonProps } from '../interfaces/ButtonProps';

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button {...props} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;