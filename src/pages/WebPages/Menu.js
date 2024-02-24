import React from 'react';
import { Navbar, FooterOverlay, SubHeading } from '../../components'; 

import './Menu.css';

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className='about__h-one' style={{background: '#000', textAlign: 'center'  }}>
        <SubHeading  title={'Our Menu'}/>
        <h1 style={{ color: '#555'}}>Our Menu Page Under Construction!!!</h1>
      </div>
      <FooterOverlay />
    </>
  )
}

export default Menu
