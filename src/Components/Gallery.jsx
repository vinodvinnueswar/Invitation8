import React from 'react'
import Img1 from '../Images/Girl_AI/Girl_AI.png'
import Img2 from '../Images/Girl_AI/Girl_AI1.png'
import Img3 from '../Images/Girl_AI/Girl_AI2.png'
import Img4 from '../Images/Girl_AI/Girl_AI3.png'
import Img5 from '../Images/Girl_AI/Girl_AI4.png'
import Img6 from '../Images/Girl_AI/Girl_AI5.png'

const Gallery = () => {
    const data = [
            {
                image: Img1
            },
            {
                image: Img2
            },
            {
                image: Img3
            },
            {
                image: Img4
            },
            {
                image: Img5
            },
            {
                image: Img6
            },
       ]
  return (
    <div className="Gallery_Container">
         <h4>Gallery</h4>
        <div className="Gallery" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            {
                data.map((item , index) => {
                    return(
                        <div className="BRGR_images">
                            <img src={item.image} alt="" />
                        </div>
                    )
                })
            }
              </div>
              </div>
    
  )
}

export default Gallery