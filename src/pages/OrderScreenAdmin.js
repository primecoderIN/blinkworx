import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import OrderTable from "../components/OrderTable";
import { useAdminContext } from "../contexts/AdminContext";

const OrderScreenAdmin = () => {
  const { orders } = useAdminContext();
  console.log(orders);
  return (
    <>
      {orders.length > 0 ? (
        <OrderTable
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

export default OrderScreenAdmin;
