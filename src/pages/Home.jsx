import React from 'react'
import Navbar from '../components/Header'
import Hero from '../components/Hero'
import SobreNos from '../components/SobreNos'
import Footer from '../components/Footer'
import Produto from '../components/Produto'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <SobreNos/>
      <Produto/>
      <Footer/>
    </div>
  )
}

export default Home
