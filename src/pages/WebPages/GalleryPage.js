import React from 'react';
import { Navbar, FooterOverlay, PhotoSliderHeader } from '../../components'; 

import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <PhotoSliderHeader />
      <FooterOverlay />
    </>
  )
}

export default GalleryPage
