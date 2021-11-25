import React from "react";
import './button.scss';
import PropTypes, { any } from 'prop-types';

const Button = ({children, onClick, width}) => {

    return (
        <button className="button" onClick={onClick} style={{width}}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onclick: PropTypes.func.isRequired,
    width: PropTypes.func.isRequired    
}

export default Button;