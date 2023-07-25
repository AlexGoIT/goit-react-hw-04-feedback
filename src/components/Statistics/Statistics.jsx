import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

import StatisticsLayout from '../StatisticsLayout';
import Notification from '../Notification';
import theme from '../utils/theme';

const Statistics = ({ options }) => {
  const { good, neutral, bad } = options;
  const optionKeys = Object.keys(options);

  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <StatisticsLayout title="Statistics">
      {totalFeedback === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <>
          <Grid container spacing={2}>
            {optionKeys.map(optionKey => (
              <Grid
                item
                key={optionKey}
                color={optionKey}
                sx={{
                  minWidth: 120,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <ThemeProvider theme={theme}>
                  <Typography
                    color={theme.palette[optionKey].main}
                    sx={{ fontWeight: 600 }}
                  >
                    {optionKey}
                  </Typography>
                  <Typography color={theme.palette[optionKey].main}>
                    {options[optionKey]}
                  </Typography>
                </ThemeProvider>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', width: '100%', mt: 2 }}>
            <Typography sx={{ fontWeight: 600 }}>
              Total: {totalFeedback}
            </Typography>
            <Typography sx={{ fontWeight: 600, mt: 1 }}>
              Positive feedback: {positivePercentage ? positivePercentage : 0}%
            </Typography>
          </Box>
        </>
      )}
    </StatisticsLayout>
  );
};

export default Statistics;

Statistics.propTypes = {
  feedbackOptions: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
