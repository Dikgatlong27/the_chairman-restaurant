import React from 'react';
import { Navbar, FooterOverlay, SubHeading  } from '../../components';

 

import './About.css';

const AboutUs = () => {
  return (
    <>
      
      <Navbar />
      <div className='about__h-one' style={{background: '#000', textAlign: 'center'  }}>
        <SubHeading  title={'About Us'}/>
        <h1 style={{ color: '#555'}}>About Us Page Under Construction!!!</h1>
      </div>
      
      <FooterOverlay />
    </>
    
  )
}

export default AboutUs
