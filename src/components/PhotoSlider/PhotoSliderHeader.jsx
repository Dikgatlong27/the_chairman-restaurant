import React, { useState } from 'react';

import { images } from '../../constants'
import './PhotoSliderHeader.css';

const galleryImages = [images.meal1,
  images.meal2, 
  images.meal3,
  images.meal4, images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const PhotoSliderHeader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const HandleCloseImage = () => {
    setSelectedImage(null);
  };


  return (
    <div iv className="app__gallery-page">
      <div className='app__gallery-page_header section__padding'>
        <h1 className='headtext__cursive'>Explore Our Gallery</h1>
        <div className='line' />
        <h3 className='app__gallery-page_sub'>Discover Exquisite Dishes and Captivating Moments</h3>
        <p className='p__opensans'>Indulge in the visual feast of our culinary creations and captivating ambiance. Experience the essence of fine dining captured in every image.</p>
      </div>
      
      <div className="app__gallery-page_container">
        {galleryImages.map((image, index) => (
          <div  key={`gallery_image-${index + 1}`} onClick={() => handleImageClick(image)}>
            <div className="app__gallery-page_card flex__center">
              <img src={image} alt={`gallery-${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className='image-overlay' onClick={HandleCloseImage}>
          <div className='overlay-content'>
            <img src={selectedImage} alt="selected" />
          </div>
          
        </div>
      )}
    </div>
  )
}

export default PhotoSliderHeader
