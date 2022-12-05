import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Section;
