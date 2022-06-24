import OrderTable from "../components/OrderTable";
import { useAdminContext } from "../contexts/AdminContext";

const OrderScreenAdmin = () => {
  const {orders} = useAdminContext()
  return (
    <OrderTable
      showSearchInput={true}
      onInputChange={() => console.log("helllo")}
      orders={orders}
    />
  );
};

export default OrderScreenAdmin;
