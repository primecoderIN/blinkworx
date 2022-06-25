import { Box, Typography } from "@mui/material";

const NoModuleAccess = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="88vh"
    >
      <Typography fontSize="2rem">
        Sorry you are not authorized to access this page.
      </Typography>
    </Box>
  );
};

export default NoModuleAccess;
