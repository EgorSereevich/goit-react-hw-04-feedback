import React, { Component } from 'react';
import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
};
