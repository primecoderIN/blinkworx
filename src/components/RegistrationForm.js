import { TextField, Stack, Button } from "@mui/material";
import { useState } from "react";

const LoginForm = ({
  onRegistrationButtonClick = () => console.log("Registration"),
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack direction="column" spacing={2} p={5}>
      <TextField
        label="Enter your name"
        type="text"
        placeholder="Name..."
        name="name"
        fullWidth
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
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
        onClick={() => onRegistrationButtonClick(name, email, password)}
        variant="contained"
      >
        Register
      </Button>
    </Stack>
  );
};

export default LoginForm;
