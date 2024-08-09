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
        <p className="p__opensans">MR103, Gables Shop 01, Lobamba H107, Ezulwini, Eswatini</p>
        <p className="p__cursive" style={{color: '#dcca87', margin: '2rem 0'}}>Opening Hours</p>
        <p className="p__opensans">Mon - Sat: 10h00 - 22h00</p>
        <p className="p__opensans"> Sun: 10h00 - 21h00</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}><Link to='https://www.google.com/maps/dir//H55P%2BQVH,+MR103,+Lobamba+H107,+Eswatini/@-26.4406248,31.1869346,18.95z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1eef3565472b2803:0xf4c8c272a657e5ed!2m2!1d31.1871875!2d-26.4405625?entry=ttu' target='_blank'>Visit Us</Link></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.nightbg} alt="findus" />
    </div>
  </div>
);

export default FindUs;
