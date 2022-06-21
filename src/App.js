import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreateOrder from "./pages/CreateOrder";
import OrderManagementScreen from "./pages/OrderManagementScreen";
import AuthScreen from "./pages/AuthScreen";
const App = () => {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route
        index
        element={
         <AuthScreen/>
        }
      />
      <Route path="/Orders" element={<OrderManagementScreen />} />
      <Route path="/CreateOrder" element={<CreateOrder />} />
    </Routes>
    </>
  );
};

export default App;
