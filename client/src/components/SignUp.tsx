import {
    Avatar, Button, Checkbox, FormControlLabel,
    Grid,
    Paper,
    TextField, Typography, useTheme
  } from '@mui/material'
  import FlexCenter from './util/FlexCenter';
  import CoffeeIcon from '@mui/icons-material/Coffee';
  import { Link } from 'react-router-dom';
  import { DatePicker } from '@mui/x-date-pickers';
  import { useDispatch } from 'react-redux';
  import { useState } from 'react';
  import { signup } from '@/RESTful/UserAuthREST';
  import { setBearer, setEmail } from '@/store/features/auth/authSlice';
  
  const SignUp = () => {
    const { palette } = useTheme();
    const paperStyle = {
      padding: 20, height: '100vh', width: 380, margin: "20px auto",
      backgroundColor: palette.grey[200].toString(), marginTop: "2rem"
    }
    const avatarStyle = { backgroundColor: palette.secondary[500].toString() }
    const textFieldStyle = {
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: avatarStyle.backgroundColor,
      },
    };
  
    // states
    const dispatch = useDispatch();
    const [email, setEmailValue] = useState('');
    const [password, setPassword] = useState('');
    const [vPassword, setVPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [birthDate, setBirthDate] = useState('');
  
    const handlePasswordValidation = () => {
      return password === vPassword;
    }
  
    const handleSignup = async () => {
      try {
        // Call the signup function
        const authData = await signup({
          email,
          password,
          name,
          phoneNumber,
          birthDate,
        });
  
        // Dispatch actions to update Redux store
        dispatch(setBearer(authData.bearer));
        dispatch(setEmail(authData.email));
  
        // Optionally, you can perform additional actions or navigate to another page
      } catch (error) {
        // Handle signup errors
        console.error('Error during signup:', error);
      }
    };
  
    const btnstyle = { margin: '8px 0' }
  
    return (
      <FlexCenter>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}><CoffeeIcon /></Avatar>
            <h2> Join the Chai & Tapri Family!</h2>
          </Grid>
          <TextField
            placeholder='Enter name'
            fullWidth
            required
            sx={textFieldStyle} // Apply the custom styling here
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <TextField
            placeholder='Enter email address'
            type='email'
            fullWidth
            required
            sx={textFieldStyle}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <br />
          <br />
          <TextField
            placeholder='Enter phone number'
            type='number'
            fullWidth
            required
            sx={textFieldStyle}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>
            Enter password: at least 8 characters long. Should be alphanumeric and not include special characters.
          </p>
          <TextField
            placeholder='Enter password'
            type='password'
            fullWidth
            required
            sx={textFieldStyle}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <TextField
            placeholder='Re-Enter password'
            type='password'
            fullWidth
            required
            sx={textFieldStyle}
            onChange={(e) => setVPassword(e.target.value)}
          />
          <br />
          <br />
          <DatePicker label='Date Of Birth' value={birthDate} onChange={(date) => setBirthDate(date)} />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="secondary"
              />
            }
            label="Remember me"
          />
          <Button
            disabled={!handlePasswordValidation()}
            onClick={handleSignup}
            type='submit'
            variant="contained"
            style={{ ...btnstyle, backgroundColor: avatarStyle.backgroundColor }}
            fullWidth
          >
            <Typography variant="h4" style={{ color: '#000' }}>Sign in</Typography>
          </Button>
          <Typography > Do you have an account ?
            <Link to="/signin" >
              Sign In
            </Link>
          </Typography>
        </Paper>
      </FlexCenter>
    )
  }
  
  export default SignUp;
  