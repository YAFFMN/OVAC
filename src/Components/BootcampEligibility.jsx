import React from 'react'
import HeadWord from './ui/HeadWord'
import Underline from './ui/Underline'
import EligabilityCard from './ui/L_EligabilityCard'
const BootcampEligibility = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center my-10 px-4 md:px-0'>
      <HeadWord HeadWord="Program Eligibility" color='var(--main-color-2)' />  
      <Underline color='var(--main-color-2)' />
    </div>
      <EligabilityCard/>

    
    </>
  )
}

export default BootcampEligibility