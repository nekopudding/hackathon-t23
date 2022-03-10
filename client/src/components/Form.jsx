import React, {useState,} from "react";
import axios from "axios";
import { Navigate } from  "react-router-dom";
import { FormControl, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';

function Form(props) {
  const {setToken, isLogin} = props;
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    notes: []
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value
      }
    });
  }
  
  function submit(e) {
    e.preventDefault();
    if (props.isLogin) {
      axios
      .post('http://localhost:4000/api/login', userInfo)
      .then((res) => {
        return (<Navigate to="/" />)
      })
      .catch(err => {
        console.error(err);
      });
    } else {
      axios
        .post('http://localhost:4000/api/register', userInfo)
        .then((res) => console.log(res))
        .catch(err => {
          console.error(err);
        });
    }
  }
  return (
    <div className="auth-form">
    <form onSubmit={submit}>
      <FormControl fullWidth={true}>
        <TextField 
          value={userInfo.username}
          onChange={handleChange} 
          variant="outlined" 
          id="username" 
          name="username" 
          type="text" 
          placeholder="Username" 
          sx={{my:1}} 
          required={true}/>
        <TextField 
          value={userInfo.password}
          onChange={handleChange} 
          variant="outlined" 
          id="password" 
          name="password" 
          type="password" 
          sx={{my:1}} 
          placeholder="Password" 
          required={true}/>
        {!isLogin && (
        <TextField 
          value={userInfo.confirmPassword}
          onChange={handleChange} 
          variant="outlined" 
          id="confirmPassword" 
          name="confirmPassword" 
          type="password" 
          sx={{my:1}} 
          placeholder="Confirm Password" 
          required={true}/>
        )}
        <Button 
          onChange={handleChange} 
          type="submit" 
          variant="contained" 
          sx={{my:1}}>
            {isLogin ? "Login" : "Register"}
        </Button>
      </FormControl>
    </form>
    </div>
    
  )
}
// Form.propTypes = {
//   setToken: PropTypes.func.isRequired
// };

export default Form;
