import {
  AppBar,
  Toolbar,
  Box,
  Avatar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { getUserDetails } from "../utils/helpers";
import { useAuthContext } from "../contexts/AuthContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const user = getUserDetails();
  const { isLoggedIn, logout } = useAuthContext();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton>
          <PetsIcon />
        </IconButton>
        <Typography variant="h5" component="h1">
          BRAND LOGO
        </Typography>
        <Stack direction="row" spacing={1} flexGrow={1} ml={2}>
          <Button color="inherit">Menu1</Button>
          <Button color="inherit">Menu2</Button>
          <Button color="inherit">Menu3</Button>
        </Stack>
        {isLoggedIn && location.pathname !== "/Account/Auth" && (
          <Box
            component="div"
            sx={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <Typography variant="h6">{user?.name}</Typography>
            <Avatar />
            <Button
              onClick={logout}
              sx={{ backgroundColor: "red", color: "#fff" }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
