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
                />
                <br />
                <br />
                <TextField
                    placeholder='Enter email address'
                    type='email address'
                    fullWidth
                    required
                    sx={textFieldStyle}
                />
                <br />
                <br />
                <TextField
                    placeholder='Enter phone number'
                    type='number'
                    fullWidth
                    required
                    sx={textFieldStyle}
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
                />
                <br />
                <br />
                <TextField
                    placeholder='Enter password'
                    type='password'
                    fullWidth
                    required
                    sx={textFieldStyle}
                />
                <br />
                <br />
                <DatePicker label='Date Of Birth' />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="secondary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' variant="contained" style={{ ...btnstyle, backgroundColor: avatarStyle.backgroundColor }} fullWidth>
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

export default SignUp