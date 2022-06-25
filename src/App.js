import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateOrder from "./pages/CreateOrder";
import AuthScreen from "./pages/AuthScreen";
import AppLayout from "./router/AppLayout";
import RequireAuth from "./router/RequireAuth";
import OrderScreenUser from "./pages/OrderScreenUser";
import { UserContextProvider } from "./contexts/UserContext";
import { AdminContextProvider } from "./contexts/AdminContext";
import OrderScreenAdmin from "./pages/OrderScreenAdmin";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/Account/Auth" />} />
          <Route path="/Account/Auth" element={<AuthScreen />} />
          <Route element={<RequireAuth Role="User" />}>
            <Route
              path="/Orders"
              element={
                <UserContextProvider>
                  <OrderScreenUser />
                </UserContextProvider>
              }
            />
          </Route>
          <Route element={<RequireAuth Role="Admin" />}>
            <Route
              path="/AdminPanel"
              element={
                <AdminContextProvider>
                  <OrderScreenAdmin />
                </AdminContextProvider>
              }
            />
          </Route>

          <Route element={<RequireAuth Role="User" />}>
            <Route path="/CreateOrder" element={<CreateOrder />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
