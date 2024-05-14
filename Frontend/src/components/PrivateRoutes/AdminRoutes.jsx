import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const user = currentUser?.data?.data?.user;
  const currentData = currentUser?.data;

  const isAdmin =
    currentUser?.isAdmin || currentData?.isAdmin || user?.isAdmin === true;

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
