import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import Topbar from '../../components/Topbar'
import Banner from '../../components/Banner'
import Feature from '../../components/Feature'
import Node from '../../components/Node'
import Footer from '../../components/Footer'

import '../../assets/scss/home/home.scss'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const Home = () => {
  const { getAccessTokenSilently, user } = useAuth0()
  const { setToken, loginStatus } = useContext(LoginStatusContext)

  useEffect(() => {
    ;(async () => {
      if (user) {
        const token_info = await getAccessTokenSilently({
          // audience: process.env.REACT_APP_appUrl,
          // audience: 'https://my.react.test/',
          // scope: 'read:get_stats',
        })
        setToken(token_info)
      }
    })()
  }, [user])

  const navigate = useNavigate()

  useEffect(() => {
    if (loginStatus) {
      navigate('/purchase-details')
    }
  }, [loginStatus])

  return (
    <div className="home-page">
      <Topbar />
      <Banner />
      <Feature />
      <Node />
      <Footer />
    </div>
  )
}

export default Home
