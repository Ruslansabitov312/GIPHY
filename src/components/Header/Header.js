import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <nav className='nav'>
        <h1 className='brand'>GIPHY</h1>
        <Link className='random' to='/random'>RANDOM</Link>
      </nav>
    </div>
  )
}

export default Header
