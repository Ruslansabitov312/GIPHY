import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <h1
        onClick={(e) => navigate('/')}
        style={{ cursor: 'pointer' }}
        className='brand'
      >
        GIPHY
      </h1>
      <nav className='nav'>
        <Link className='header-trending' to='/trending'>TRENDING</Link>
        <Link className='header-random' to='/random'>RANDOM</Link>
      </nav>
    </div>
  )
}

export default Header
