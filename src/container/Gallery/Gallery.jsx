import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort  } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Gallery.css';
import { Link } from 'react-router-dom';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const instagramLinks = [
  'https://www.instagram.com/p/CyGGkFAMhZf/',
  'https://www.instagram.com/p/CxvYhYmMFsr/',
  'https://www.instagram.com/p/CxX2vhzNthA/',
  'https://www.instagram.com/p/CyL-Sx5sR2n/',
]

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title='instagram' />
        <h1 className="headtext__cursive">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Explore the visual feast that awaits you at The Chairman Fortaleza de Sol through our enchanting photo gallery</p>
        <button type='button' className='custom__button'><Link to='/gallery page'>Explore</Link></button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div  key={`gallery_image-${index + 1}`}>
              <a href={instagramLinks[index]} target='_blank' rel='noreferrer' className="app__gallery-images_card flex__center">
                <img src={image} alt="gallery" />
                <BsInstagram className='gallery__image-icon' />
              </a>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
