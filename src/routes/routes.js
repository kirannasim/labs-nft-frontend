import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup/Signup'
import AccountDetails from '../pages/AccountDetails/AccountDetails'
import MyNodes from '../pages/MyNodes/MyNodes'
import PurchaPurchaseDetails from '../pages/PurchaseDetails/PurchaseDetails'

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/account-details" element={<AccountDetails />} />
      <Route exact path="/mynodes" element={<MyNodes />} />
      <Route
        exact
        path="/purchase-details"
        element={<PurchaPurchaseDetails />}
      />
    </Routes>
  )
}

export default Routers
