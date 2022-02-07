import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/trending'>Trending</Link>
        <Link to='/random'>Random</Link>
      </nav>
    </>
  )
}

export default Header
