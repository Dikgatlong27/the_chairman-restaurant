import React from 'react';

import { images } from '../../constants'
import './PhotoSliderHeader.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const PhotoSliderHeader = () => {


  return (
    <div iv className="app__gallery-page">
      <div className="app__gallery-page_container">
        {galleryImages.map((image, index) => (
          <div  key={`gallery_image-${index + 1}`}>
            <a className="app__gallery-page_card flex__center">
              <img src={image} alt="gallery" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoSliderHeader
