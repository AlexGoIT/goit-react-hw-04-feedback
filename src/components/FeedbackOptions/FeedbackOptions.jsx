import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';

import { OptionsWrapper } from './FeedbackOptions.styled';
import theme from '../utils/theme';

const FeedbackOptions = ({ onClick, options }) => {
  return (
    <OptionsWrapper>
      <ThemeProvider theme={theme}>
        {Object.keys(options).map((type, ind) => {
          return (
            <Button
              variant="contained"
              color={type}
              key={ind}
              onClick={() => onClick(type)}
              sx={{ minWidth: '110px' }}
            >
              {type}
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
