import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Random from './pages/Random'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/random' element={<Random />} />
      </Routes>
    </>
  )
}

export default App
