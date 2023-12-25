import { selectUserEmail } from "@/store/features/auth/authSlice";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

const gridTemplateLargeScreens = `
    "a b c"
    "a d c"
    "a d c"
    "a e c"
    "a e c"
    "a e f"
    "a e f"
    "a e f"
    "a e f"
    "a e f"
`;



const Home = () => {
  // IF USER IS NOT SIGNED IN, MAKE HIM SIGN IN
  const userEmail = useSelector(selectUserEmail);
  const navigate = useNavigate();
  useEffect(() => {
    if(!userEmail){
      navigate("/");
    }
  },[userEmail, navigate]);
  return (
      <Box width="100%" height="100%" display="grid" gap="1.5rem"
        sx={{
          gridTemplateColumns: "repeat(3,minmax(370px,1fr))",
          gridTemplateRows: "repeat(10,minmax(60px,1fr))",
          gridTemplateAreas: gridTemplateLargeScreens
        }}>
        <Row1 title={userEmail}/>
        <Row2 />
        <Row3 />
      </Box>
  )
}

export default Home