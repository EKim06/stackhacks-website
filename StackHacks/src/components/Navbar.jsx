import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row p-1 text-accent'>
      
      {/* Navbar elements */}
      
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/eboard'>E-Board</Link>
        <Link to='/events'>Events</Link>
        <Link to='/contact'>Contact</Link>
      
    </div>
  )
}

export default Navbar