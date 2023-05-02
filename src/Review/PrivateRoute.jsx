import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const hasToken = !!localStorage.getItem('token');
  
  return (
    hasToken ? <Outlet /> : <Navigate to="/login" />
    
  );
};

export default PrivateRoute;
