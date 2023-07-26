import React, { useReducer } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

document.title = 'HW-4 Feedback';

const countFeedbackReducer = (options, action) => {
  return { ...options, [action.type]: options[action.type] + 1 };
};

const App = () => {
  const [options, dispatch] = useReducer(countFeedbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        onClick={type => dispatch({ type })}
        options={options}
      ></FeedbackOptions>
      <Statistics options={options} />
    </Section>
  );
};

export default App;
