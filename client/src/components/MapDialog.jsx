import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


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




export default function MapDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <ThemeProvider theme={theme}>
      <Dialog onClose={handleClose} open={open} className="dialog" 
        maxWidth='lg'
      >
      <Card sx={{ width: 1000}}>
      <CardMedia
        component="img"
        image="https://geomarketing.com/wp-content/uploads/2015/08/google_map.png"
        alt="green iguana"
      />
      </Card>
      </Dialog>
    </ThemeProvider>
  );
}

MapDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
