import React from 'react'
import sideWall from '../Images/Decoration/sidewall.png'
import Flower_decors from '../Images/Decoration/Flower_Decors.png'
import Girlswing from '../Images/Decoration/Girl_Swing.png'
import clouds from '../Images/Decoration/Clouds.png'
import Frame from '../Images/Decoration/Borders.png'
import Garden from '../Images/Garden/Garden3copy.png'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"


const Intro = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

  return (
    <div className="Intro_Container">
        <div className="Intro_Page">
            <div className="Flower_decors">
                <img src={Flower_decors} alt="" />
            </div>
            <div className="sideWall">
                <img src={sideWall} alt="" />
            </div>
            <div className="details"  data-aos="zoom-in">
                <h2>Half Saree ceremoy</h2>
                <h3>Sunday, 25th May,2025</h3>
                <p>8 : 30 AM Onwards</p>
            </div>
            <div className="Garden">
                <img src={Garden} alt="" />
            </div>
            <div className="Frame">
                <img src={Frame} alt="" />
            </div>
            <div className="Girl_Swing">
                <img src={Girlswing} alt="" />
            </div>

          
    
            
        </div>
    </div>
  )
}

export default Intro