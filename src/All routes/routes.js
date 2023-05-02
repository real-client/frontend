import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login.js";
import UserLogin from "../pages/login/userlogin.js"
import Signup from "../pages/signup/signup.js";
import PrivateRoute from "../Review/PrivateRoute.jsx";
import PublicRoute from "../Review/PublicRoute.jsx";

class AllRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute />}>

            

            
            </Route>
            <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userlogin" element={<UserLogin />} />
              
            </Route>
          </Routes>
      </BrowserRouter>
    );
  }
}

export default AllRoutes;
