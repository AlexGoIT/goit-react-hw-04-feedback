import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { OptionsWrapper } from './FeedbackOptions.styled';

const theme = createTheme({
  typography: {
    button: {
      fontWeight: 600,
    },
  },
  palette: {
    good: {
      main: '#008000',
      contrastText: '#fff',
    },
    neutral: {
      main: '#ffa500',
      contrastText: '#fff',
    },
    bad: {
      main: '#ff0000',
      contrastText: '#fff',
    },
  },
});

const FeedbackOptions = ({ onClick, feedbackOptions }) => {
  return (
    <OptionsWrapper>
      <ThemeProvider theme={theme}>
        {Object.keys(feedbackOptions).map((key, ind) => {
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
