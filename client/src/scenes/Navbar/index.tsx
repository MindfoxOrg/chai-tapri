
import { useSelector, useDispatch } from 'react-redux';
import { useTheme, Box } from "@mui/material";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from "react-router-dom";
import { removeBearer, removeEmail, selectUserEmail} from "@/store/features/auth/authSlice";
import FlexBetween from "@/components/util/FlexBetween";

const Navbar = () => {
  const { palette } = useTheme();
  const userEmail = useSelector(selectUserEmail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSettingsIconClick = () => {
    // Add logic for Psychology icon click
    console.log('Settings icon clicked');
  };

  const handleLogoutIconClick = () => {
    dispatch(removeBearer());
    dispatch(removeEmail());
    navigate("/");    
  };

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0 rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <ConnectWithoutContactIcon sx={{ fontSize: "28px" }} />
        <Box sx={{ "&:hover": { color: palette.grey[300] } }}>
          <Link to='/' style={{ fontSize: "16px", fontWeight: "bold", color: palette.grey[100], textDecoration: "inherit" }}>
            tapri & chai
          </Link>
        </Box>
        <CoffeeIcon />
      </FlexBetween>

      {/* RIGHT SIDE */}
      {userEmail ? (
        <FlexBetween gap="1rem">
          <SettingsIcon sx={{ fontSize: "28px", cursor: 'pointer' }} onClick={handleSettingsIconClick} />
          <LogoutIcon sx={{ fontSize: "28px", cursor: 'pointer' }} onClick={handleLogoutIconClick} />
        </FlexBetween>
      ) : (
        <FlexBetween gap="2rem">
          <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link to='' style={{ fontSize: "16px", fontWeight: "bold", color: palette.grey[700], textDecoration: "inherit" }}>
              Sign In
            </Link>
          </Box>
          <Box>
            <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
              <Link to='/signup' style={{ fontSize: "16px", fontWeight: "bold", color: palette.grey[700], textDecoration: "inherit" }}>
                Sign Up
              </Link>
            </Box>
          </Box>
        </FlexBetween>
      )}
    </FlexBetween>
    
  );
};

export default Navbar;
