import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import StarField from '../Components/StarField'
import Clouds from '../Components/Clouds'
const Index = () => {
  return (
    <div className='bg-black min-h-screen'>
      <NavBar />
      {/* <Clouds /> */}
      <StarField />
      <h1>Welcome to the Index Page</h1>
    </div>
  )
}

export default Index