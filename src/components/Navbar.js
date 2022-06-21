import {useState} from "react"
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

const Navbar = () => {
  const [user]  = useState(getUserDetails)
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
        <Box
          component="div"
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Typography variant="h6">{user?.name}</Typography>
          <Avatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
