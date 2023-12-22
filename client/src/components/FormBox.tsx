import { Box, Button, FormControl, FormLabel, 
    TextField, Typography, useTheme } from '@mui/material'
import FlexCenter from './FlexCenter';

const FormBox = () => {
    const { palette } = useTheme();
    return (
        <FlexCenter color={palette.grey[400]} margin="10rem 1rem 0">
            <FlexCenter>
                <Box width="100%" textAlign="center">
                    <Typography variant="h3" mb="-0.8rem" color={palette.secondary[500]}>
                        Welcome to Tapri & Chai !
                    </Typography>
                    <br/>
                    <FormControl>
                        <FormLabel>Enter Name</FormLabel>
                        <TextField></TextField>
                        <Button>Submit</Button>
                    </FormControl>
                    <Typography marginTop="18rem" variant="h4">Sign In</Typography>
                </Box>
            </FlexCenter>
        </FlexCenter>
    );
};
export default FormBox