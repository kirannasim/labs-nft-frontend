import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>
  )
}

export default Routers
