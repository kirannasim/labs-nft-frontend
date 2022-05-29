import React from 'react'
import Topbar from '../../components/Topbar'
import Banner from '../../components/Banner'
import Feature from '../../components/Feature'
import Node from '../../components/Node'
import Footer from '../../components/Footer'

import '../../assets/scss/home/home.scss'
const Home = () => {
  return (
    <div className="home-page">
      <Topbar loginStatus={false} />
      <Banner />
      <Feature />
      <Node />
      <Footer />
    </div>
  )
}

export default Home
