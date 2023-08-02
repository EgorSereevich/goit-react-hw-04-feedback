import React, { Component } from 'react';
import { SectionObj, Header } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionObj>
      <Header>{title}</Header>
      {children}
    </SectionObj>
  );
};
