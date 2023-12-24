import {
    Avatar, Button, Checkbox, FormControlLabel,
    Grid,
    Paper,
    TextField, Typography, useTheme
  } from '@mui/material'
  import FlexCenter from './util/FlexCenter';
  import CoffeeIcon from '@mui/icons-material/Coffee';
  import { Link, useNavigate } from 'react-router-dom';
  import { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { signin } from '@/RESTful/UserAuthREST';
  import { setBearer, setEmail as setReduxEmail } from '@/store/features/auth/authSlice'; // Renamed the imported setEmail
  
  const SignIn = () => {
    const { palette } = useTheme();
    const paperStyle = {
      padding: 20, height: '55vh', width: 280, margin: "20px auto",
      backgroundColor: palette.grey[200].toString(), marginTop: "5rem"
    }
    const avatarStyle = { backgroundColor: palette.secondary[500].toString() }
    const btnstyle = { margin: '8px 0' }
  
    const textFieldStyle = {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: avatarStyle.backgroundColor,
      },
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setLocalEmail] = useState(''); // Renamed to setLocalEmail
    const [password, setPassword] = useState('');
  
    const handleSignInValidation = () => {
      return email && password;
    }
  
    const handleSignIn = async () => {
      try {
        // Call the signin function
        const authData = await signin({
          email,
          password,
        });
        
        localStorage.setItem('authKey', authData.bearer);
        localStorage.setItem('userEmail', authData.email);
        
        dispatch(setBearer(localStorage.getItem('authKey')));
        dispatch(setReduxEmail(localStorage.getItem('userEmail'))); // Use the imported setReduxEmail
        navigate('/home')
        // Optionally, you can perform additional actions or navigate to another page
      } catch (error) {
        // Handle signin errors
        console.error('Error during signin:', error);
      }
    };
  
    return (
      <FlexCenter>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><CoffeeIcon /></Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label='Email Address'
            placeholder='Enter email address'
            fullWidth
            required
            onChange={(e) => setLocalEmail(e.target.value)} // Use setLocalEmail here
            sx={textFieldStyle}
          />
          <br />
          <br />
          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            fullWidth
            required
            onChange={(e) => setPassword(e.target.value)}
            sx={textFieldStyle}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="secondary"
              />
            }
            label="Remember me"
          />
          <Button type='submit' disabled={!handleSignInValidation()} onClick={handleSignIn}
            variant="contained" style={{ ...btnstyle, backgroundColor: avatarStyle.backgroundColor }} fullWidth>
            <Typography variant="h4" style={{ color: '#000' }}>Sign in</Typography>
          </Button>
          <Typography > Don't have an account ?
            <Link to="/signup" >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </FlexCenter>
    )
  }
  
  export default SignIn;
  