import React from 'react'
import HeadWord from './ui/HeadWord'
import Underline from './ui/Underline'
import Line from './ui/line'
import SolidPoint from './ui/solidPoint'
import HollowPoint from './ui/hollowPoint'
const BootcampProgramContent = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center my-10 px-4 md:px-0'>
      <HeadWord HeadWord="Program Content" color='var(--main-color-3)' />  
      <Underline color='var(--main-color-3)' />
    </div>
    <div className='flex'>
    <Line />
    <SolidPoint/>
    <svg width="380" height="50" >
  <line
    x1="0"
    y1="30"
    x2="380"
    y2="30"
    className='stroke-[#fdef9d] stroke-8'
  />
  </svg>
    <HollowPoint/>
    <svg width="150px"  height="200px"  viewBox="0 0 20 20">
  <path
    d="
      M 1,1
      Q 14,2
        14,14
    "
    className='stroke-[#fdef9d]'
  />
</svg>
    </div>
    
    </>
  )
}

export default BootcampProgramContent