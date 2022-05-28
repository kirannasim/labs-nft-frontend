import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup/Signup";
import AccountDetails from "../pages/Purchase/AccountDetails";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/accountdetails" element={<AccountDetails />} />
    </Routes>
  );
};

export default Routers;
