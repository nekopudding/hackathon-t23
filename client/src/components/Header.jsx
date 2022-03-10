import React, {useState} from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import {Link} from "react-router-dom";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

function Header(props) {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <ThemeProvider theme={theme}>
    <header>
    <Stack spacing={2} direction="row" justifyContent="space-between">
    <Link to="/"><h1><HighlightIcon />TechFind</h1></Link>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        {!isLoggedIn && 
        <Link to="/login"><Button variant="contained" color="primary">Login</Button></Link>
        }
        {!isLoggedIn && 
        <Link to="/register"><Button variant="outlined">Register</Button></Link>
        }
        {isLoggedIn &&
          <Link to="/"><Button variant="contained">Logout</Button></Link>
        }
      </Stack>
    </Stack>
    </header>
    </ThemeProvider>
  );
}

export default Header;
