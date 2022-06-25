import OrderTable from "../components/OrderTable";
import { useUserContext } from "../contexts/UserContext";

const OrderScreenUser = () => {
  const { orders } = useUserContext();
  return (
    <>
      {orders.length > 0 ? (
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
