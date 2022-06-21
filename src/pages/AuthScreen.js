import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  CircularProgress,
} from "@mui/material";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { useAuthContext } from "../contexts/AuthContext";
const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState("login");
  const {
    handleLogin,
    handleRegistration,
    errorType,
    showSpinner,
    successMsg,
  } = useAuthContext();
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "5rem",
      }}
    >
      <Box />
      <Stack>
        <Stack direction="row" justifyContent="center">
          <Button
            sx={{ borderRadius: "0" }}
            variant={`${activeTab === "login" ? "contained" : "outlined"}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </Button>
          <Button
            sx={{ borderRadius: "0" }}
            variant={`${activeTab === "register" ? "contained" : "outlined"}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </Button>
        </Stack>

        {activeTab === "login" ? (
          <LoginForm onLoginButtonClick={handleLogin} />
        ) : (
          <RegistrationForm onRegistrationButtonClick={handleRegistration} />
        )}
        {showSpinner && (
          <CircularProgress sx={{ marginLeft: "7.5rem" }} size="4rem" />
        )}
        {errorType && (
          <Typography
            variant="h6"
            component="span"
            width="70%"
            mx="auto"
            color="white"
            bgcolor="red"
            textAlign="center"
            fontSize="14px"
          >
            {errorType}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default AuthScreen;
