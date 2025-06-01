import React from 'react'

const Location = () => {
  return (
    <div className="Location_Container">
        <h4>Venue Location</h4>
       <div className="Location_Page" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
       <div className="Location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.834993461915!2d82.2312716!3d16.982664899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382839555bb587%3A0xd097557ca4e75416!2sVenkanna%20Babu%20Function%20Hall!5e0!3m2!1sen!2sin!4v1746171224881!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="Button">
            <a href="https://maps.app.goo.gl/MhjySApEPtA1mMwR6">View Map</a>
        </div>
       </div>

     </div>
  )
}

export default Location