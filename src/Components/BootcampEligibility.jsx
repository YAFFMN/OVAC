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
  
  // Mobile-friendly animation with reduced movement
  const slideInFromLeftMobile = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  }
  
  const slideInFromRightMobile = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  }
  
  const animationTransition = {
    type: 'spring',
    stiffness: 80,
    damping: 18,
    mass: 0.6
  }

  return (
    <div className="w-full">
      {/* Header Section - Fully responsive */}
      <div className='flex flex-col items-center justify-center my-6 sm:my-8 md:my-12 lg:my-16 xl:my-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
        <div className="flex flex-col items-center text-center w-full max-w-4xl">
          <HeadWord HeadWord="Program Eligibility" color='var(--main-color-2)' />  
          <div className="flex justify-center w-full">
            <Underline color='var(--main-color-2)' />
          </div>
        </div>
      </div>
      
      {/* Cards Container - Enhanced responsive layout */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 pb-6 sm:pb-8 md:pb-12 lg:pb-16">
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          
          {/* First Card - Responsive alignment */}
          <MotionDiv
            className="flex justify-center md:justify-start w-full"
            variants={{
              hidden: { opacity: 0, x: window?.innerWidth < 768 ? -30 : -60 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={animationTransition}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <EligabilityCard
                title="Student or Graduate"
                description="Currently enrolled in educational institution or recent graduate looking to enhance skills"
                borderColor='var(--main-color-2)'
                gradient="radial-gradient(120% 140% at 15% 50%, rgba(236,26,99,0.35) 0%, rgba(236,26,99,0.15) 40%, rgba(236,26,99,0) 70%)"
                textAlign="left"
                Icon={<GiGraduateCap className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black" />}
              />
            </div>
          </MotionDiv>
          
          {/* Second Card - Responsive alignment */}
          <MotionDiv
            className="flex justify-center md:justify-end w-full"
            variants={{
              hidden: { opacity: 0, x: window?.innerWidth < 768 ? 30 : 60 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={animationTransition}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <R_EligabilityCard
                title="High School Student"
                description="Applicants must be between grade 9 and grade 12"
                borderColor='var(--main-color-2)'
                gradient="radial-gradient(120% 140% at 85% 50%, rgba(255,214,0,0.35) 0%, rgba(255,214,0,0.15) 40%, rgba(255,214,0,0) 70%)"
                textAlign="right"
                Icon={<LuSchool className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black" />}
              />
            </div>
          </MotionDiv>
          
          {/* Third Card - Responsive alignment */}
          <MotionDiv
            className="flex justify-center md:justify-start w-full"
            variants={{
              hidden: { opacity: 0, x: window?.innerWidth < 768 ? -30 : -60 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={animationTransition}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <EligabilityCard
                title="Stable Internet Connection"
                description="The program will be held through online meetings with interactive sessions"
                borderColor='var(--main-color-3)'
                gradient="radial-gradient(120% 140% at 15% 50%, rgba(83,190,151,0.35) 0%, rgba(83,190,151,0.15) 40%, rgba(83,190,151,0) 70%)"
                textAlign="left"
                Icon={<TbWorld className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black" />}
              />
            </div>
          </MotionDiv>
          
          {/* Fourth Card - Responsive alignment */}
          <MotionDiv
            className="flex justify-center md:justify-end w-full"
            variants={{
              hidden: { opacity: 0, x: window?.innerWidth < 768 ? 30 : 60 },
              visible: { opacity: 1, x: 0 }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={animationTransition}
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <R_EligabilityCard
                title={
                  <span className="block">
                    Previous Knowledge <span className="inline-block" style={{color: 'var(--main-color-2)'}}>IS NOT</span> Required!
                  </span>
                }
                description="You can have your first experience with us. We'll guide you from the basics."
                borderColor='var(--main-color-2)'
                gradient="radial-gradient(120% 140% at 85% 50%, rgba(236,26,99,0.35) 0%, rgba(236,26,99,0.15) 40%, rgba(236,26,99,0) 70%)"
                textAlign="right"
                Icon={<FaBrain className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-black" />}
              />
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  )
}

export default BootcampEligibility
