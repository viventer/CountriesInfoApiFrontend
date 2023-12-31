import { useLocation, Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
  const location = useLocation();
  const { roles } = useAuth();

  const content = roles.User ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
