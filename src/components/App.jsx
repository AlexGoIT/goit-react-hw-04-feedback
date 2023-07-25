import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

document.title = 'HW-4 Feedback';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = { good, neutral, bad };

  const onClick = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions onClick={onClick} options={options}></FeedbackOptions>
      <Statistics options={options} />
    </Section>
  );
};

export default App;
