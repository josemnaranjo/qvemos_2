import { useUser } from "../context/userContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { user } = useUser();
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/" replace />;
};

export default ProtectedRoutes;
