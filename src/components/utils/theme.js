import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      fontWeight: 600,
    },
    title: {
      fontSize: 20,
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
      main: '#cc0000',
      contrastText: '#fff',
    },
  },
});

export default theme;
