import React, { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Headle } from './Headle/Headle';
import { Notification } from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  headleClick = state => {
    this.setState(prevState => {
      return {
        [state]: prevState[state] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }
  render() {
    const options = Object.keys(this.state);
    return (
      <Headle>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.headleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification title={'There is no feedback'} />
          )}
        </Section>
      </Headle>
    );
  }
}
export { App };
