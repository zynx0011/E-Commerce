import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.auth);
  console.log(currentUser);
  // const refresh = JSON.parse(window.localStorage.getItem("refreshToken"));
  // console.log(currentUser?.data?.data?.user?.refreshToken);
  // console.log(currentUser?.data?.data?.refreshToken);
  // console.log(currentUser);
  // console.log(Token);
  // console.log(document.cookie);
  // const refresh = currentUser?.data?.data?.user?.refreshToken;
  // console.log(refresh);

  return currentUser ? <Outlet /> : <Navigate to="/api/v1/users/Signup" />;
};

export default PrivateRoute;
