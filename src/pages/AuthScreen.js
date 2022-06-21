import { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem"
      }}
    >
      <Stack>
        <Stack direction='row'  justifyContent='center'>
          <Button sx={{ borderRadius: "0"}} variant={`${activeTab==="login"? "contained" : "outlined"}`} onClick={()=> setActiveTab("login")}>Login</Button>
          <Button sx={{ borderRadius: "0"}} variant={`${activeTab==="register"? "contained" : "outlined"}`} onClick={()=> setActiveTab("register")}>Register</Button>
        </Stack>

        {activeTab === "login" ? <LoginForm /> : <RegistrationForm />}
      </Stack>
    </Box>
  );
};

export default AuthScreen;
