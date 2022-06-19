import { Routes, Route } from "react-router-dom";
import Accordian from "./components/Accordian";
import CreateOrder from "./pages/CreateOrder";
import OrderManagementScreen from "./pages/OrderManagementScreen";
const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <Accordian
            children={<h1>Hello World</h1>}
            ProductName="Apple I-Phone 13"
            ProductSubText="This is phone"
            isPhone
          />
        }
      />
      <Route path="/Orders" element={<OrderManagementScreen />} />
      <Route path="/CreateOrder" element={<CreateOrder />} />
    </Routes>
  );
};

export default App;
