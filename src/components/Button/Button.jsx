import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => (
    <button onMouseLeave={props.leave} onMouseOver={props.hover} onClick={props.buttonClick} className="button">{props.name}</button>
);

Button.PropTypes = {
    leave: PropTypes.func.isRequired,
    hover: PropTypes.func.isRequired,
    buttonClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
};


export default Button;