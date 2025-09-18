import React from 'react'
import { useNavigate } from 'react-router-dom'

const BootcampHero = () => {
  const navigate = useNavigate()

  const handleApplyClick = () => {
    navigate('/bootcamp-registration')
  }

  return (
   <div className="flex items-center justify-center min-h-screen px-4 relative z-1">
        <div className="flex flex-col items-center justify-center border-4 border-green-500 rounded-3xl p-6 max-w-4xl w-full text-center mt-24"
          style={{
            background: "linear-gradient(90deg, rgba(34,197,94,0.12) 0%, rgba(236,26,99,0.12) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-2 w-full flex flex-col items-center justify-center text-center">
            <span className="text-white leading-tight">OCTOBER</span>
            <span className="leading-tight mt-1">
              <span className="text-[var(--main-color)]">V</span>
              <span className="text-white">I</span>
              <span className="text-white">SUAL </span>
              <span className="text-[var(--main-color-2)]">A</span>
              <span className="text-white">R</span>
              <span className="text-white">T</span>
              <span className="text-white">S</span>
            </span>
            <span className="leading-tight mt-1">
              <span className="text-[var(--main-color-3)]">B</span>
              <span className="text-white">OOTCAMP</span>
            </span>
          </h1>
          
          <p className="text-yellow-400 text-xl mb-8 font-medium text-center">
            Acquire creative visual arts skills through our 5-week online program
          </p>
          
          <button 
          onClick={handleApplyClick}
          className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full inline-block mb-8 cursor-pointer transition-colors text-xl font-bold transform hover:scale-105 active:scale-95"
        >
          APPLY NOW
        </button>
          
          <p className="text-white text-lg text-center">
            Registration Deadline: <span className="text-yellow-400 font-semibold">September 20, 2025</span>
          </p>
        </div>
      </div>
  )
}

export default BootcampHero

