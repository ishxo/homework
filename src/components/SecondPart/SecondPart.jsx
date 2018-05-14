import React from 'react';
import PropTypes from 'prop-types';
import './SecondPart.css';


const SecondPart = ({ children, className }) => (
    <div className={className}>
        { children }
    </div>
);

SecondPart.PropTypes = {
    label:PropTypes.string.isRequired,
    className:PropTypes.string.isRequired,
};




export default SecondPart;