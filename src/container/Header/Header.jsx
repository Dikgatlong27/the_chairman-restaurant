import React from 'react';
import { Link } from 'react-router-dom'; 

import { images } from '../../constants'
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header section__padding" id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Discover the Essence of Fine Dining' />
      <h1 className='app__header-h1'>Harnessing Culinary Excellence</h1>
      <p className="p__opensans" id='main-p'>Embrace exquisite flavors and warmth, where every moment is a culinary delight—a sanctuary of charm and elegance.</p>
      <button type='button' className='custom__button'><Link to='./reservation'>Make a Reservation</Link></button>
    </div>

    <div className="app__wrapper_img" id='img'>
      <img src={images.welcome} alt="header" />
    </div>
  </div>
 
);

export default Header;
