import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreateOrder from "./pages/CreateOrder";
import AuthScreen from "./pages/AuthScreen";
import AdminScreen from "./pages/AdminScreen";
import AppLayout from "./router/AppLayout";
import RequireAuth from "./router/RequireAuth";
import { getUserDetails } from "./utils/helpers";
import NoModuleAccess from "./pages/NoModuleAccess";
import OrderScreenUser from "./pages/OrderScreenUser";
import { UserContextProvider } from "./contexts/UserContext";
import { AdminContextProvider } from "./contexts/AdminContext";
import OrderScreenAdmin from "./pages/OrderScreenAdmin";
const App = () => {
  const user = getUserDetails();
  console.log(user)
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
                !user?.isAdmin ? (
                  <UserContextProvider>
                    <OrderScreenUser />
                  </UserContextProvider>
                ) : (
                  <NoModuleAccess />
                )
              }
            />
          </Route>
          <Route element={<RequireAuth />}>
            <Route
              path="/AdminPanel"
              element={
                user?.isAdmin ? (
                  <AdminContextProvider>
                    <OrderScreenAdmin/>
                  </AdminContextProvider>
                ) : (
                  <NoModuleAccess />
                )
              }
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
