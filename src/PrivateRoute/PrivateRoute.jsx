import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate state={location.pathname} to="/login" replace={true}></Navigate>
  );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
