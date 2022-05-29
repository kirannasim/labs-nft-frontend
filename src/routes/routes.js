import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup/Signup'
import AccountDetails from '../pages/Purchase/AccountDetails'
import PurchaseDetails from '../pages/PurchaseDetails/PurchaseDetails'

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/account-details" element={<AccountDetails />} />
      <Route exact path="/purchase-details" element={<PurchaseDetails />} />
    </Routes>
  )
}

export default Routers
