//import React from 'react'
import './index.css'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import ContactMe from './components/ContactMe'

function App() {


  return (
    <>
     <Navbar />
     <HeroSection />
     <ContactMe />
     <Footer />
    </>
  )
}

export default App
