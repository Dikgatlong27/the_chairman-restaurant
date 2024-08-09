import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';
import { SubHeading, SlidesAtHero } from '../../components';

import slides from '../../constants/CarouselDataAtHero'

const 
Header = () => (
  <div className="app__header section__padding" id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Discover the Essence of Fine Dining in Ezulwini' />
      <h1 className='app__header-h1'>Harnessing Culinary Excellence</h1>
      <p className="p__opensans" id='main-p'>Embrace exquisite flavors and warmth, where every moment is a culinary delight—a sanctuary of charm and elegance.</p>
      <button type='button' className='custom__button'><Link to='/reservation'>Make a Reservation</Link></button>
    </div>
    <div className="app__wrapper_img">
      <h3 className='app__wrapper_img-header'>Upcoming Events</h3>
      <SlidesAtHero data={slides} />
    </div>
  </div>
 
);

export default Header;
