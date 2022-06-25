import { Navigate, useLocation, Outlet } from "react-router-dom";
import { getUserDetails } from "../utils/helpers";
import NoModuleAccess from "../pages/NoModuleAccess";

const RequireAuth = ({ Role }) => {
  const user = getUserDetails();

  const location = useLocation();
  if (!localStorage.getItem("Token")) {
    return <Navigate to="/Account/Auth" replace state={{ from: location }} />;
  }
  if (user.Role === Role) {
    return <Outlet />;
  }

  return <NoModuleAccess />;
};

export default RequireAuth;
