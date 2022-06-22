import {
  Box,
  InputBase,
  Typography,
  Stack,
  styled,
  TableContainer,
  TableBody,
  TableRow,
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: "1px solid grey",
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "lightblue",
}));
const OrderTable = ({ showSearchInput, showCreateOrderButton,onInputChange}) => {
  const navigate = useNavigate();
  return (
    <Box width="80%" mx="auto" mt="4rem">
      <Stack direction="row" justifyContent="space-between" mb="1rem">
        <Typography variant="h4">Order Management Screen</Typography>
        {showSearchInput && (
          <Search>
            <InputBase onChange={onInputChange} fullWidth placeholder="Search by order description..." />
          </Search>
        )}
      </Stack>
      <TableContainer>
        <Table>
          <StyledTableHead>
            <TableRow>
              <StyledTableCell>Order Id</StyledTableCell>
              <StyledTableCell align="left">Order Description</StyledTableCell>
              <StyledTableCell align="left">
                Count of item types included in order
              </StyledTableCell>
              <StyledTableCell align="right">
                % of Electronic items
              </StyledTableCell>
              <StyledTableCell align="right">Created by</StyledTableCell>
              <StyledTableCell align="right">Created on</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            <TableRow>
              <StyledTableCell component="th" scope="row">
                234
              </StyledTableCell>
              <StyledTableCell align="left">
                Order from customer 1
              </StyledTableCell>
              <StyledTableCell align="left">
                <Stack direction="row">
                  <Typography mx="2px" flexGrow={1} border="1px solid red">
                    Electronics
                  </Typography>
                  <Typography mx="2px" flexGrow={1} border="1px solid green">
                    Groceries
                  </Typography>
                </Stack>
              </StyledTableCell>
              <StyledTableCell align="right">50%</StyledTableCell>
              <StyledTableCell align="right">Sanjeev Kumar</StyledTableCell>
              <StyledTableCell align="right">22-06-01</StyledTableCell>
              <StyledTableCell align="center">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {showCreateOrderButton && (
        <Button
          variant="contained"
          onClick={() => navigate("/CreateOrder")}
          sx={{ marginTop: "2rem" }}
        >
          Create new order
        </Button>
      )}
    </Box>
  );
};

export default OrderTable;
