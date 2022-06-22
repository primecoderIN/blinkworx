import OrderTable from "../components/OrderTable";

const OrderScreenUser = () => {
  return (
    <OrderTable
      showCreateOrderButton={true}
      showSearchInput={true}
      onInputChange={() => console.log("helllo")}
    />
  );
};

export default OrderScreenUser;
