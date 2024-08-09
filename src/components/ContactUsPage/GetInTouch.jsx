import React from 'react'

import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div id='app__contactUs-contact'>
        
      <h1 className='app__contactUs-contact_info' style={{ color: '#ccc'}}>Get in touch</h1>
      
      <p className='p__contact'>Email: <a href='mailto:info@chairmanforte.co.za'>info@chairmanforte.co.za</a></p>
      
      <p className='p__contact'>Phone: <a href='tel:+26876982922'>+268 76 982 922</a></p>

      <div>
        <h3>Address</h3>
        <p className='p__opensans'>MR 103 Ezulwini</p>
        <p className='p__opensans'>The Gables Shopping Center</p>
        <p className='p__opensans'>Eswatini</p>
      </div>
      <div>
        <h3>Opening Hours</h3>
        <p className='p__opensans'>Thurs - Sat: 10:00 - 21:00</p>
        <p className='p__opensans'>Sun: 10:00 - 20:00</p>
      </div>
        
    </div>
  )
}

export default GetInTouch
