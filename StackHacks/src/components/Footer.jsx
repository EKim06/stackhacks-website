import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col items-center'>
      
      <div className='flex flex-row gap-2'>
        <a href='https://www.linkedin.com/company/stackhacks/posts/?feedView=all' target="_blank" rel="noopener noreferrer" >
          LinkedIn
        </a>
        <a href='https://www.instagram.com/stackhacksbu/?hl=en' target="_blank" rel="noopener noreferrer" >
          Instagram
        </a>
        <a href='https://github.com/stackhacksbu' target="_blank" rel="noopener noreferrer" >
          Github
        </a>
      </div>

      <div className='flex flex-row p-1 '>
          {/* Navbar elements */}
          <Link to='/about'>About</Link>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
      </div>

    </div>
  )
}

export default Footer