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
    <main className='fixed z-50 bg-background'>
      {/* Laptop View */}
      <div className='hidden lg:flex flex-row justify-between max-w-[80%] items-center mx-auto'>
        <div className='gap-5 flex flex-row p-1 text-accent items-center'>
            <Link className = 'flex flex-row items-center' to='/'> <img src={SH} alt='logo' className='w-10 m-1'/> StackHacks</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/about'>About</Link>
            <Link to='/eboard'>E-Board</Link>
            <Link to='/events'>Events</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <button className=' w-full max-w-30'> Login </button>
      </div> 

      {/* Mobile View */}
      <div className='lg:hidden p-1'>
      
        {/* 1. Wrap the icon in a flex container and push it to the end (right) */}
        <div className="flex justify-between cursor-pointer items-center">
          <Link className = 'text-accent flex flex-row items-center' to='/'> <img src={SH} alt='logo' className='w-10 m-1'/> StackHacks</Link>
          {!nav ? (
            <AiOutlineMenu onClick={handleNav} size={30}/>
          ) : (
            <AiOutlineClose onClick={handleNav} size={30}/>
          )}
        </div>

        {/* 2. The menu list sits below. flex-col keeps text on the left by default. */}
        {nav && 
          <div className='flex text-accent flex-col'> 
            <Link to='/projects' className='py-2' onClick={handleNav}>Projects</Link>
            <Link to='/about' className='py-2' onClick={handleNav}>About</Link>
            <Link to='/eboard' className='py-2' onClick={handleNav}>E-Board</Link>
            <Link to='/events' className='py-2' onClick={handleNav}>Events</Link>
            <Link to='/contact' className='py-2' onClick={handleNav}>Contact</Link>
          </div>}
          
      </div>
      <div className='w-screen border-b border-b-gray-800'/>
    </main>
  )
}

export default Navbar