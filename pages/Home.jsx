import { Slider } from '@material-ui/core'
import React from 'react'
import Announcment from '../Components/Announcment'
import Navbar from './Navbar'





const Home = () => {
  return (
    <div>
        <Announcment/>
        <Navbar/>
        <Slider/>
    </div>
  )
}

export default Home

