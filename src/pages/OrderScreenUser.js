import { Box, CircularProgress } from "@mui/material";
import OrderTable from "../components/OrderTable";
import { useUserContext } from "../contexts/UserContext";

const OrderScreenUser = () => {
  const { orders, isOrderLoading } = useUserContext();
  return (
    <>
      { !isOrderLoading ? (
        <OrderTable
          showCreateOrderButton={true}
          showSearchInput={true}
          onInputChange={() => console.log("helllo")}
          orders={orders}
        />
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress size="8rem" />
        </Box>
      )}
    </>
  );
};

export default OrderScreenUser;
