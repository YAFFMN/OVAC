import React from 'react'
import HeadWord from './ui/HeadWord'
import Underline from './ui/Underline'
import EligabilityCard from './ui/L_EligabilityCard'
import R_EligabilityCard from './ui/R_EligabilityCard'
import { motion } from 'framer-motion'
import { LuSchool } from 'react-icons/lu'
import { TbWorld } from "react-icons/tb";
import { FaBrain } from "react-icons/fa6";

const BootcampEligibility = () => {
  const MotionDiv = motion.div
  return (
    <>
    <div className='flex flex-col items-center justify-center my-10 px-4 md:px-0'>
      <HeadWord HeadWord="Program Eligibility" color='var(--main-color-2)' />  
      <Underline color='var(--main-color-2)' />
    </div>
    
    {/* Grid container for the four cards - arranged in four rows */}
    <div className="flex flex-col gap-8 max-w-6xl mx-auto px-4 md:px-8">
      {/* First row - Left aligned */}
      <MotionDiv
        className="flex justify-start"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
      >
        <EligabilityCard
        gradient="radial-gradient(120% 140% at 15% 50%, rgba(236,26,99,0.35) 0%, rgba(236,26,99,0.15) 40%, rgba(236,26,99,0) 70%)"
        />
      </MotionDiv>
      
      {/* Second row - Right aligned */}
      <MotionDiv
        className="flex justify-end"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
      >
        <R_EligabilityCard
        title="High School Student"
        description="Applicants must be between grade 9 and grade 12"
        borderColor='var(--main-color-2)'
        Icon={<LuSchool className="text-6xl text-center text-black" />}
        />
      </MotionDiv>
      
      {/* Third row - Left aligned */}
      <MotionDiv
        className="flex justify-start"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
      >
        <EligabilityCard
        title="Stable Internet Connection"
        description="The program will be held through online meetings"
        borderColor='var(--main-color-3)'
        Icon={<TbWorld className="text-6xl text-center text-black" />}
        />
      </MotionDiv>
      
      {/* Fourth row - Right aligned */}
      <MotionDiv
        className="flex justify-end"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18, mass: 0.6 }}
      >
        <R_EligabilityCard
        title={
          <>
            Previous Knowledge <span style={{color: 'yellow'}}>IS NOT</span> Required!
          </>
        }
        description="You can have your first experience with us, with no
 need for previous visual art skills"
        Icon={<FaBrain className="text-6xl text-center text-black" />}
        />
      </MotionDiv>
    </div>
    
    </>
  )
}
export default BootcampEligibility
