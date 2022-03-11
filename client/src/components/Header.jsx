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
      main: '#4287f5',
    },
    tertiary: {
      main: '#3fe629'
    }
  },
});

function Header(props) {
  const [logReg, setLogReg] = useState(false);

  function handleLogReg() {
    setLogReg(true);
  }
  return (
    <ThemeProvider theme={theme}>
    <header>
    <Stack spacing={2} direction="row" justifyContent="space-between">
    <Link to="/" onClick={() => setLogReg(false)}><h1><HighlightIcon />FindMyTech</h1></Link>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
      {!logReg &&
        <Button variant="contained" color="secondary" onClick={props.openHelp}>Get Help</Button>}
      {!logReg &&
        <Button variant="contained" color="tertiary" onClick={props.openMap}>Store Map</Button>
      }

        <Link to="/login"><Button variant="contained" color="primary" onClick={handleLogReg}>Login</Button></Link>
        <Link to="/register"><Button variant="outlined" onClick={handleLogReg}>Register</Button></Link>
          {/* <Link to="/"><Button variant="contained">Logout</Button></Link> */}
      </Stack>
    </Stack>
    </header>
    </ThemeProvider>
  );
}

export default Header;
