import React, { Component } from 'react';
import { List, Span } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li>
        Good:<Span> {good}</Span>
      </li>
      <li>
        Neutral:<Span>{neutral}</Span>
      </li>
      <li>
        Bad:<Span>{bad}</Span>
      </li>
      <li>
        Total:<Span>{total}</Span>
      </li>
      <li>
        Positive feedback:<Span>{positivePercentage}%</Span>
      </li>
    </List>
  );
};
