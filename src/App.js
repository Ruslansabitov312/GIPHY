import React from 'react'
import Header from './components/Header/Header'
import Trending from './pages//Trending/Trending'
import Random from './pages//Random/Random'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/'         element={<Trending />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/random'   element={<Random />} />
      </Routes>
    </div>
  )
}

export default App
