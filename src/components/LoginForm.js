import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";

const LoginForm = ({ onLoginButtonClick = () => console.log("login") }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack direction="column" spacing={2} p={5}>
      <TextField
        label="Enter your email"
        type="email"
        placeholder="Email..."
        name="email"
        fullWidth
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField
        label="Enter your password"
        type="password"
        placeholder="Password..."
        name="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={() => onLoginButtonClick(email, password)}
        variant="contained"
      >
        Login
      </Button>
    </Stack>
  );
};

export default LoginForm;
