import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionObj, Header } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionObj>
      <Header>{title}</Header>
      {children}
    </SectionObj>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
