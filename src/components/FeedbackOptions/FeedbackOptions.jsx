import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import { OptionsWrapper } from './FeedbackOptions.styled';
import theme from '../utils/theme';

const FeedbackOptions = ({ onClick, options }) => {
  return (
    <OptionsWrapper>
      <ThemeProvider theme={theme}>
        {Object.keys(options).map((key, ind) => {
          return (
            <Button
              variant="contained"
              color={key}
              key={ind}
              onClick={() => onClick(key)}
              sx={{ minWidth: '110px' }}
            >
              {key}
            </Button>
          );
        })}
      </ThemeProvider>
    </OptionsWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
