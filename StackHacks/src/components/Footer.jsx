import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col items-center '>
      
      <div className='flex flex-row justify-center'>
        <div className='p-1'>
          Linked In
        </div>
        <div className='p-1'>
          Instagram
        </div>
        <div className='p-1'>
          Github
        </div>
      </div>

      <div className='flex flex-row p-1 justify-center'>
        
        {/* Navbar elements */}
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/contact'>Contact</Link>
        </div>
        
      </div>

    </div>
  )
}

export default Footer