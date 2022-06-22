import {
  Box,
  InputBase,
  Typography,
  Stack,
  styled,
  TableContainer,
  TableBody,
  TableRow,
  Paper,
  TableHead,
  Table,
  TableCell,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "8px",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid grey",
  width: "20%",
}));

const OrderScreenUser = () => {
  const navigate = useNavigate();
  return (
    <Box width="80%" mx="auto" mt="4rem">
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">Order Management Screen</Typography>
        <Search>
          <InputBase fullWidth placeholder="Search by order description..." />
        </Search>
      </Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order Id</TableCell>
              <TableCell align="left">Order Description</TableCell>
              <TableCell align="left">
                Count of item types included in order
              </TableCell>
              <TableCell align="right">% of Electronic items</TableCell>
              <TableCell align="right">Created by</TableCell>
              <TableCell align="right">Created on</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                234
              </TableCell>
              <TableCell align="left">Order from customer 1</TableCell>
              <TableCell align="left">
                <Stack direction="row">
                  <Typography mx="2px" flexGrow={1} border="1px solid red">
                    Electronics
                  </Typography>
                  <Typography mx="2px" flexGrow={1} border="1px solid green">
                    Groceries
                  </Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">50%</TableCell>
              <TableCell align="right">Sanjeev Kumar</TableCell>
              <TableCell align="right">22-06-01</TableCell>
              <TableCell align="center">
                <IconButton>
                  <EditIcon />
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        onClick={() => navigate("/CreateOrder")}
        sx={{ marginTop: "2rem" }}
      >
        Create new order
      </Button>
    </Box>
  );
};

export default OrderScreenUser;
