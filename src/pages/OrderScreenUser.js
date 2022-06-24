import OrderTable from "../components/OrderTable";
import { useUserContext } from "../contexts/UserContext";

const OrderScreenUser = () => {
  const {orders} = useUserContext()
  return (
    <OrderTable
      showCreateOrderButton={true}
      showSearchInput={true}
      onInputChange={() => console.log("helllo")}
      orders={orders}
    />
  );
};

export default OrderScreenUser;
