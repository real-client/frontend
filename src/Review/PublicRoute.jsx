import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const hasToken = !!localStorage.getItem('token');
  
  return (
    hasToken ? <Navigate to="/home" /> : <Outlet />
  );
};

export default PublicRoute;
