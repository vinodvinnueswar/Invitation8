import React from 'react'
import Intro from '../Components/Intro'
import '../App.css'
import Details from '../Components/Details'
import Location from '../Components/Location'
import Gallery from '../Components/Gallery'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <div className="HomePage">
        <Intro/>
        <Details/>
        <Location/>
        <Gallery/>
        <Contact/>
    </div>
  )
}

export default HomePage