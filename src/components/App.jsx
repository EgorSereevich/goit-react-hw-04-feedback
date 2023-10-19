import React, { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Headle } from './Headle/Headle';
import { Notification } from './Notification/Notification';
const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const options = Object.keys(feedback);
  console.log(feedback);
  const headleClick = options => {
    console.log(feedback);
    setFeedback(prevState => ({
      ...prevState,
      [options]: prevState[options] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  return (
    <Headle>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={headleClick} />
      </Section>
      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </Section>
    </Headle>
  );
};

export { App };
