import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import SH from '/SH.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <main>
      {/* Laptop View */}
      <div className='gap-5 hidden md:flex flex-row p-1 text-accent border-b border-b-gray-300 items-center'>
          <Link className = 'flex flex-row items-center' to='/'> <img src={SH} alt='logo' className='w-10 m-1'/> StackHacks</Link>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/eboard'>E-Board</Link>
          <Link to='/events'>Events</Link>
          <Link to='/contact'>Contact</Link>
      </div>

      {/* Mobile View */}
      <div className='md:hidden p-1'>
      
        {/* 1. Wrap the icon in a flex container and push it to the end (right) */}
        <div className="flex justify-between cursor-pointer items-center">
          <img src={SH} alt='logo' className='w-10 m-1'/>
          {!nav ? (
            <AiOutlineMenu onClick={handleNav} size={30}/>
          ) : (
            <AiOutlineClose onClick={handleNav} size={30}/>
          )}
        </div>

        {/* 2. The menu list sits below. flex-col keeps text on the left by default. */}
        {nav && 
          <div className='flex text-accent flex-col'> 
            <Link to='/' className='py-2'>Home</Link>
            <Link to='/about' className='py-2'>About</Link>
            <Link to='/eboard' className='py-2'>E-Board</Link>
            <Link to='/events' className='py-2'>Events</Link>
            <Link to='/contact' className='py-2'>Contact</Link>
          </div>}
          
      </div>
    </main>
  )
}

export default Navbar