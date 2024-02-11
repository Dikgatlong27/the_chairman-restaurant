import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{marginBottom: '2rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">129 Duxbury Rd, Hatfield, Pretoria, 0083</p>
        <p className="p__cormorant" style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Sat: 10h00 - 22h00</p>
        <p className="p__opensans"> Sun: 10h00 - 17h00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
