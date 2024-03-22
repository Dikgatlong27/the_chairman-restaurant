import React from 'react';
import { Link } from 'react-router-dom'; 

import { SubHeading } from '../../components';
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className='headtext__cursive' style={{marginBottom: '2rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">129 Duxbury Rd, Hatfield, Pretoria, 0083</p>
        <p className="p__cursive" style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Thurs - Sat: 12h00 - 00h00</p>
        <p className="p__opensans"> Sun: 12h00 - 21h00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}><Link to='https://www.google.com/maps/place/129+Duxbury+Rd,+Hillcrest,+Pretoria,+0083/@-25.7557492,28.2359937,17z/data=!3m1!4b1!4m9!1m2!10m1!1e2!3m5!1s0x1e9561badb82f77f:0xde4d4da82eb3d5a3!8m2!3d-25.7557541!4d28.2385686!16s%2Fg%2F11bw50k2mk?entry=ttu' target='_blank'>Visit Us</Link></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.nightbg} alt="findus" />
    </div>
  </div>
);

export default FindUs;
