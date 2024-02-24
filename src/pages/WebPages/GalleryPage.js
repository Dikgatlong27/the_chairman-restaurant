import React from 'react';
import { Navbar, FooterOverlay, SubHeading } from '../../components'; 

import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className='about__h-one' style={{background: '#000', textAlign: 'center'  }}>
        <SubHeading  title={'Our Gallery'}/>
        <h1 style={{ color: '#555'}}>Gallery Page Under Construction!!!</h1>
      </div>
      <FooterOverlay />
    </>
  )
}

export default GalleryPage
