import React from 'react';
import { Navbar, FooterOverlay, SubHeading } from '../../components'; 

import './Contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='about__h-one' style={{background: '#000', textAlign: 'center'  }}>
        <SubHeading  title={'Contact Us'}/>
        <h1 style={{ color: '#555'}}>Contact Us Page Under Construction!!!</h1>
      </div>
      <FooterOverlay />
    </>
  )
}

export default Contact
