import React from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Page404 from './pages/404page'
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route   path='/' element={<Home/>} />
        
        <Route   path='*' element={<Page404/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
