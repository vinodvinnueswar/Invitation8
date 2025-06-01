import React from 'react'
import Bg from '../Images/Decoration/Border.jpg'
import Flower from '../Images/Decoration/BG5.png'
import Girl from '../Images/Girl_img/Girl_Img.png'
import Gif from '../Images/gif/Gif.mp4'
import Bell from '../Images/Decoration/Bells.png'
import BorderLine from '../Images/Border/Border_line2.png'

const Details = () => {
  return (
     <div className="Details_Container">
        <div className="Details_Page">
            {/* <div className="bg">
                <img src={Bg} alt="" />
            </div> */}
            <div className="Bell">
                <img src={Bell} alt="" />
          </div>
            <div className="Flower_bg">
                <img src={Flower} alt="" />
            </div>
            <div className="Girl_Img">
                <img src={Girl} alt="" />
            </div>
            <div className="name" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <p>Anusha</p>
            </div>
            <div className="content" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <p>Mr & Mrs Vivek Ambika</p>
               <div className="content2">
               <p>request the honor of presence at   </p>
                  <p>the half saree presentation </p> 
                  <p> of their daughter</p>
               </div>

               <div className="content3" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <h3>Family Members</h3>
                <p> With Blessing of Grand Parents </p>
                <p>Vastha rao and vijay lakshmi </p>
               </div>
            </div>

            <div className="Venue" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
                <h3>Venue</h3>
                {/* <div className="borderline">
                    <img src={BorderLine} alt="" />
                </div> */}
                <p> v - Convention</p>
                <p> By Pass Road,</p>
                <p>karimanagar</p>

            </div>

        </div>
     </div>
  )
}

export default Details