import React from 'react';
import PropTypes from 'prop-types';


const Section = ({children, className}) => (
    <div className={className}>
          {children}  
    </div>

);
Section.propTypes = {
    children: PropTypes.node.isRequired,
    className:PropTypes.string.isRequired,
}

export default Section;