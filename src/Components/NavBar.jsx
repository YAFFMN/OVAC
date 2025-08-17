import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent shadow-md z-50">
      <div className="flex items-center justify-around px-6 py-3">
        <span className="text-2xl font-bold text-red-600">October Visual Arts Club</span>
        <div className="flex space-x-6">
          <Link to="/" className="text-white text-lg font-medium hover:text-red-600 transition duration-300 ease-in-out">Home</Link>
          <a href="#about" className="text-white text-lg font-medium hover:text-red-600 transition duration-300 ease-in-out">About us</a>
          <Link to="/gallery" className="text-white text-lg font-medium hover:text-red-600 transition duration-300 ease-in-out">Gallery</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar