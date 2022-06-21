import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateOrder from "./pages/CreateOrder";
import OrderManagementScreen from "./pages/OrderManagementScreen";
import AuthScreen from "./pages/AuthScreen";
import AdminScreen from "./pages/AdminScreen";
import AppLayout from "./router/AppLayout";
import RequireAuth from "./router/RequireAuth";
import { getUserDetails } from "./utils/helpers";
import NoModuleAccess from "./pages/NoModuleAccess";
const App = () => {
  const user  = getUserDetails()
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="/Account/Auth" />} />
          <Route path="/Account/Auth" element={<AuthScreen />} />
          <Route element={<RequireAuth />}>
            <Route
              path="/Orders"
              element={
                !user?.isAdmin ? <OrderManagementScreen /> : <NoModuleAccess />
              }
            />
          </Route>
          <Route element={<RequireAuth />}>
            <Route
              path="/AdminPanel"
              element={user?.isAdmin ? <AdminScreen /> : <NoModuleAccess />}
            />
          </Route>
          <Route element={<RequireAuth />}>
            <Route
              path="/CreateOrder"
              element={!user?.isAdmin ? <CreateOrder /> : <NoModuleAccess />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
