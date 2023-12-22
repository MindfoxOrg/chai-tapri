import FlexBetween from "@/components/FlexBetween";
import CoffeeIcon from '@mui/icons-material/Coffee';

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useState } from 'react';
import { useTheme, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
type Props = {}

const Navbar = (props: Props) => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState("dashboard");
    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0 rem" color={palette.grey[300]}>
            {/* LEFT SIDE */}
            <FlexBetween gap="0.75rem">
                <ConnectWithoutContactIcon sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="16px">
                    tapri & chai
                </Typography>
                <CoffeeIcon/>
            </FlexBetween>
            {/* RIGHT SIDE */}
            <FlexBetween gap="2rem">
                <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                    <Link to='/' onClick={() => setSelected("signin")}
                        style={{ fontSize:"16px", fontWeight:"bold",
                            color: selected === "signin" ? "inherit" :
                                palette.grey[700], textDecoration: "inherit"
                        }}>
                        Sign In

                    </Link>
                </Box>
                <Box>
                    <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
                        <Link to='/signup' onClick={() => setSelected("signup")}
                            style={{fontSize:"16px", fontWeight:"bold",
                                color: selected === "signup" ? "inherit" :
                                    palette.grey[700], textDecoration: "inherit"
                            }}>
                            Sign Up
                        </Link>
                    </Box>
                </Box> 
            </FlexBetween>
        </FlexBetween>
    )
}

export default Navbar