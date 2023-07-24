import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

document.title = 'HW-4 Feedback';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onClick = option => {
    setState({ ...state, [option]: state[option] + 1 });
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onClick={onClick}
        feedbackOptions={state}
      ></FeedbackOptions>
      <Statistics feedbackOptions={state} />
    </Section>
  );
};

export default App;
