import React, { useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickOnButton = btnName => {
    if (btnName === 'good') {
      return setGood(good + 1);
    } else if (btnName === 'neutral') {
      return setNeutral(neutral + 1);
    } else return setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    let total = bad + neutral + good;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    let positivePercentage = Math.round((good / total) * 100);
    return positivePercentage;
  };

  let total = countTotalFeedback();

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <Feedback
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={clickOnButton}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
