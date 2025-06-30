import React from 'react'
import Img1 from '../Images/Girl_AI/Girl_AI.png'
import Img2 from '../Images/Girl_AI/Girl_AI1.png'
import Img3 from '../Images/Girl_AI/Girl_AI2.png'
import Img4 from '../Images/Girl_AI/Girl_AI3.png'
import Img5 from '../Images/Girl_AI/Girl_AI4.png'
import Img6 from '../Images/Girl_AI/Girl_AI5.png'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';


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

   export function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
//    const [active ,setActive] = useState(0);
//       const handleClick = (index) => {
//        setActive(index);
//      };
  return (
    <div className="Gallery_Container">
         <h4>Gallery</h4>
        <div className="Gallery"  data-aos="fade-up"
     data-aos-duration="3000">

    <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >
            {
                data.map((item , index) => {
                    return(
                    
                           <a className="BRGR_images" href={item.image} key={index}>
                           <img src={item.image} alt={item.alt} />
                           </a>
        
                    )
                })
            }

    </LightGallery>    
            {/* {
                data.map((item , index) => {
                    return(
                        <div className="BRGR_images" key={index}>
                           
                            <div className={ index === active ? "active" : ""} onClick={() => handleClick(index)}>
                            <img src={item.image} alt="" />
                            </div>

                        </div>
                    )
                })
            } */}
        </div>
    </div>
  )
}

export default Gallery
