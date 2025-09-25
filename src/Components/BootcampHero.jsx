import React from 'react'
import { useNavigate } from 'react-router-dom'
import bootcampTitle from '../assets/bootcamptitle.png'

const BootcampHero = () => {
  const navigate = useNavigate()
  
  const handleApplyClick = () => {
    navigate('/bootcamp-registration')
  }
  
  return (
   <div className="flex items-center justify-center min-h-screen px-4 relative z-1">
        <div className="flex flex-col items-center justify-center border-4 border-[var(--main-color-3)] rounded-3xl p-2 max-w-4xl w-full text-center mt-24"
          style={{
            background: "linear-gradient(90deg, rgba(34,197,94,0.12) 0%, rgba(236,26,99,0.12) 100%)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <img 
            src={bootcampTitle}
            alt="October Visual Arts Bootcamp"
            className="w-full max-w-3xl h-auto mb-2 object-contain"
            onError={(e) => console.log('Image failed to load:', e)}
          />
          
          <p className="text-[var(--main-color-2)] text-xl mb-8 font-medium text-center">
            Acquire creative visual arts skills through our 5-week online program
          </p>
          
          <button 
          onClick={handleApplyClick}
          className="bg-[var(--main-color)] hover:bg-pink-800 text-white px-10 py-4 rounded-full inline-block mb-8 cursor-pointer transition-colors text-xl font-bold transform hover:scale-105 active:scale-95"
        >
          APPLY NOW
        </button>
          
          <p className="text-white text-lg text-center">
            Registration Deadline: <span className="text-[var(--main-color-2)] font-semibold">October 5, 2025</span>
          </p>
        </div>
      </div>
  )
}

export default BootcampHero
