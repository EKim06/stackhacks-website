import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Eboard from './pages/Eboard'
import Events from './pages/Events'
import Contact from './pages/Contact'


function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eboard" element={<Eboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
