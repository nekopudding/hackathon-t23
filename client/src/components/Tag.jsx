import React, {useState} from 'react';
import Chip from '@mui/material/Chip';


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
  },
});

export default function Tag(props) {
  const [clicked, setClicked] = useState(props.clicked);

  function toggleClicked() {
      setClicked((prev) => !prev);
      console.log("tag" + clicked)
      props.updateTag(props.index, clicked);
  }

  return (
    <ThemeProvider theme={theme}>
    <Chip key={props.index} label={props.tag} variant={!clicked ? "filled" : "outlined"}  color="primary" onClick={toggleClicked}/>
    </ThemeProvider>
  );
}
