import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup/Signup";
import AccountDetails from "../pages/AccountDetails/AccountDetails";
import MyNodes from "../pages/MyNodes/MyNodes";
import PurchaPurchaseDetails from "../pages/PurchaseDetails/PurchaseDetails";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/about" element={<AccountDetails />} />
      <Route exact path="/mynodes" element={<MyNodes />} />
      <Route exact path="/games" element={<PurchaPurchaseDetails />} />
    </Routes>
  );
};

export default Routers;
