import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/routes';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const themeAttributes = {
  typography: {
    fontFamily: ["Muli", "Helvetica", "Arial", "sans-serif"],
  },
  overrides: {
    MuiMenu: {
      paper: {
        borderRadius: "0",
        color: "#000",
      },
    },
    MuiListItemIcon: {
      display: "block",
    },
    MuiBreadcrumbs: {
      separator: {
        display: "block",
        marginTop: "8px",
      },
    },
    MuiStepIcon: {
      text: {
        fill: "#fff",
      },
    },
  },
};

const theme = createTheme({
  ...themeAttributes,
  palette: {
    primary: {
      main: "#f2844e",
    },
    secondary: {
      main: "#409ff1"
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Routes></Routes>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);
