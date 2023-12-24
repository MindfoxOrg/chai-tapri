import FlexCenter from "@/components/util/FlexCenter";
import { selectUserEmail } from "@/store/features/auth/authSlice";
import { useTheme, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Footer = () => {
    const { palette } = useTheme();
    const userEmail = useSelector(selectUserEmail);

    return (
        !userEmail ? (
            <FlexCenter marginBottom="10rem">
                <Box sx={{ color: palette.grey[300] }}>
                    <Typography sx={{ fontSize: "14px", fontWeight:'bold', color: palette.grey[700], textDecoration: "inherit" }}>
                        © Chai and Tapri 2023. Rights Reserved With MindFox.Org
                    </Typography>
                </Box>
            </FlexCenter>
        ) : null
    );
};

export default Footer;
