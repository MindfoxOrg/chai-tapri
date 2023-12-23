import {
    Avatar, Button, Checkbox, FormControlLabel,
    Grid,
    Paper,
    TextField, Typography, useTheme
} from '@mui/material'
import FlexCenter from './util/FlexCenter';
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from 'react-router-dom';

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

    return (
        <FlexCenter>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><CoffeeIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField
                    label='Username'
                    placeholder='Enter username'
                    fullWidth
                    required
                    sx={textFieldStyle} // Apply the custom styling here
                />
                <br />
                <br />
                <TextField
                    label='Password'
                    placeholder='Enter password'
                    type='password'
                    fullWidth
                    required
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
                <Button type='submit' variant="contained" style={{ ...btnstyle, backgroundColor: avatarStyle.backgroundColor }} fullWidth>
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
