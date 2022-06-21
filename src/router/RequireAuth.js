import { Navigate, useLocation, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const location = useLocation();
  if (!localStorage.getItem("Token")) {
    return <Navigate to="/Account/Auth" replace state={{ from: location }} />;
  }

  return <Outlet />;
};

export default RequireAuth;
