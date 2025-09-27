import React from 'react'
import HeadWord from './ui/HeadWord'
import Underline from './ui/Underline'
import EligabilityCard from './ui/L_EligabilityCard'
import R_EligabilityCard from './ui/R_EligabilityCard'
import { motion } from 'framer-motion'
import { LuSchool } from 'react-icons/lu'
import { TbWorld } from "react-icons/tb";
import { FaBrain } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

const BootcampEligibility = () => {
  const MotionDiv = motion.div
  
  // Animation variants for better control
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  }
  
  const slideInFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  }
  
  const animationTransition = {
    type: 'spring',
    stiffness: 80,
    damping: 18,
    mass: 0.6
  }

  return (
    <>
      {/* Header Section */}
      <div className='flex flex-col items-center justify-center my-8 md:my-12 lg:my-16 px-4 sm:px-6 md:px-8'>
        <HeadWord HeadWord="Program Eligibility" color='var(--main-color-2)' />  
        <Underline color='var(--main-color-2)' />
      </div>
      
      {/* Cards Container */}
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
        
        {/* First Card - Left aligned on desktop, center on mobile */}
        <MotionDiv
          className="flex justify-center md:justify-start w-full"
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={animationTransition}
        >
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <EligabilityCard
              title="Student or Graduate"
              description="Currently enrolled in educational institution or recent graduate looking to enhance skills"
              borderColor='var(--main-color-2)'
              gradient="radial-gradient(120% 140% at 15% 50%, rgba(236,26,99,0.35) 0%, rgba(236,26,99,0.15) 40%, rgba(236,26,99,0) 70%)"
              textAlign="left"
              Icon={<GiGraduateCap className="text-4xl sm:text-5xl lg:text-6xl text-center text-black" />}
            />
          </div>
        </MotionDiv>
        
        {/* Second Card - Right aligned on desktop, center on mobile */}
        <MotionDiv
          className="flex justify-center md:justify-end w-full"
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={animationTransition}
        >
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <R_EligabilityCard
              title="High School Student"
              description="Applicants must be between grade 9 and grade 12"
              borderColor='var(--main-color-2)'
              gradient="radial-gradient(120% 140% at 85% 50%, rgba(255,214,0,0.35) 0%, rgba(255,214,0,0.15) 40%, rgba(255,214,0,0) 70%)"
              textAlign="right"
              Icon={<LuSchool className="text-4xl sm:text-5xl lg:text-6xl text-center text-black" />}
            />
          </div>
        </MotionDiv>
        
        {/* Third Card - Left aligned on desktop, center on mobile */}
        <MotionDiv
          className="flex justify-center md:justify-start w-full"
          variants={slideInFromLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={animationTransition}
        >
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <EligabilityCard
              title="Stable Internet Connection"
              description="The program will be held through online meetings with interactive sessions"
              borderColor='var(--main-color-3)'
              gradient="radial-gradient(120% 140% at 15% 50%, rgba(83,190,151,0.35) 0%, rgba(83,190,151,0.15) 40%, rgba(83,190,151,0) 70%)"
              textAlign="left"
              Icon={<TbWorld className="text-4xl sm:text-5xl lg:text-6xl text-center text-black" />}
            />
          </div>
        </MotionDiv>
        
        {/* Fourth Card - Right aligned on desktop, center on mobile */}
        <MotionDiv
          className="flex justify-center md:justify-end w-full"
          variants={slideInFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={animationTransition}
        >
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
            <R_EligabilityCard
              title={
                <>
                  Previous Knowledge <span style={{color: 'var(--main-color-2)'}}>IS NOT</span> Required!
                </>
              }
              description="You can have your first experience with us. We'll guide you from the basics."
              borderColor='var(--main-color-2)'
              gradient="radial-gradient(120% 140% at 85% 50%, rgba(236,26,99,0.35) 0%, rgba(236,26,99,0.15) 40%, rgba(236,26,99,0) 70%)"
              textAlign="right"
              Icon={<FaBrain className="text-4xl sm:text-5xl lg:text-6xl text-center text-black" />}
            />
          </div>
        </MotionDiv>
      </div>
    </>
  )
}

export default BootcampEligibility
