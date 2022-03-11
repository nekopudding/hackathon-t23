import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Tag from './Tag'
import Divider from '@mui/material/Divider';
import { DialogActions } from '@mui/material';
import Typography from '@mui/material/Typography';


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




export default function HelpDialog(props) {
  const [tags,setTags] = useState([
    {title:'TV', value:true},
    {title:'Headphones', value:true},
    {title:'Mobile Devices', value:true},
    {title:'Computers', value:true},
    {title:'General', value: true}
  ]);
  const [languages,setLanguages] = useState([
    {title:'English', value:true},
    {title:'Japanese', value:true},
    {title:'Korean',value:true},
    {title:'Mandarin', value:true},
    {title:'French', value:true}
  ]);
  const [submitted, setSubmitted] = useState(false)
  const { onClose, open } = props;

  const handleClose = () => {
    setSubmitted(false);
    setTags([
      {title:'TV', value:true},
      {title:'Headphones', value:true},
      {title:'Mobile Devices', value:true},
      {title:'Computers', value:true},
      {title:'General', value: true}
    ]);
    setLanguages([
      {title:'English', value:true},
      {title:'Japanese', value:true},
      {title:'Korean',value:true},
      {title:'Mandarin', value:true},
      {title:'French', value:true}
    ]);
    onClose();
  };

  function handleClick(){
    setSubmitted(true);
  }

  const updateTag = (index, value) => {
    setTags((prev) => {
      prev[index] = {title:prev[index].title, value:[value]}
      return prev;
    })
  }

  const updateLanguage = (index, value) => {
    setLanguages((prev) => {
      prev[index] = {title:prev[index].title, value:[value]}
      return prev;
    })
  }

  return (
    <ThemeProvider theme={theme}>
    
      {!submitted &&
      <Dialog onClose={handleClose} open={open} className="dialog">
        <DialogTitle>What would you like help with?</DialogTitle>
        <Typography sx={{ p: 2}}>Tags</Typography>
        <Stack direction="row" spacing={1} sx={{ p: 2}}>
            {tags.map((tag,index) => <Tag index={index} key={index} tag={tag.title} updateTag={updateTag} clicked={tag.value}/>)}
        </Stack>
        <Divider />
        <Typography sx={{ p: 2}}>Languages</Typography>
        <Stack direction="row" spacing={1} sx={{ p: 2}}>
            {languages.map((tag,index) => <Tag index={index} key={index} tag={tag.title} updateTag={updateLanguage} clicked={tag.value}/>)}
        </Stack>
        <DialogActions>
          <Button onClick={handleClick} variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
      }
      {submitted && 
      <Dialog onClose={handleClose} open={open} className="dialog">
        <DialogTitle>Please wait... A store representative will be with you in a moment.</DialogTitle>
      </Dialog>
      }
    
    </ThemeProvider>
  );
}

HelpDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
