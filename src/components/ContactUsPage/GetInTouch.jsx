import React from 'react'

import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div id='app__contactUs-contact'>
        
      <h1 className='app__contactUs-contact_info' style={{ color: '#ccc'}}>Get in touch</h1>
      
      <p className='p__contact'>Email: <a href='mailto:info@chairmanforte.co.za'>info@chairmanforte.co.za</a></p>
      
      <p className='p__contact'>Phone: <a href='tel:+27127860145'>012 786 0145</a></p>

      <div>
        <h3>Address</h3>
        <p className='p__opensans'>129 Duxbury Rd</p>
        <p className='p__opensans'>Hatfield</p>
        <p className='p__opensans'>Pretoria, Gauteng, 0083</p>
      </div>
      <div>
        <h3>Opening Hours</h3>
        <p className='p__opensans'>Thurs - Sat: 12:00 - 00:00</p>
        <p className='p__opensans'>Sun: 11:00 - 18:00</p>
      </div>
        
    </div>
  )
}

export default GetInTouch
