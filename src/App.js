import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import { LoginStatusContext } from './context/LoginStatusContext'

function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  return (
    <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LoginStatusContext.Provider>
  )
}

export default App
