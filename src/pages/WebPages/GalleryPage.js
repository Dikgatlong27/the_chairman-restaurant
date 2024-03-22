import React from 'react';
import { Navbar, FooterOverlay, PhotoSlider, PhotoSliderHeader } from '../../components'; 

import './GalleryPage.css';

const GalleryPage = () => {
  return (
    <>
      <Navbar />
      <PhotoSliderHeader />
      <PhotoSlider />
      <FooterOverlay />
    </>
  )
}

export default GalleryPage
