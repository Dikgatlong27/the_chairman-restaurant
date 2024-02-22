import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return  (
    <nav className='app__navbar app__bg'>
      <div className="app__navbar-logo">
        <Link to='/'><img src={images.chairman} alt="app logo" /></Link>
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><Link to='/'>Home</Link></li>
        <li className='p__opensans'><Link to='/about'>About</Link></li>
        <li className='p__opensans'><Link to='/contact'>Contact</Link></li>
        <li className='p__opensans'><Link to='/menu'>Menu</Link></li>
      </ul>
      <div className='app__navbar-gallery'>
        <a href='#gallery' className='p__opensans'>Gallery</a>
      <div />
        <a href='#bookings' className='p__opensans'>Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/'>Home</Link></li>
              <li className='p__opensans' onClick={() => setToggleMenu(false)}><Link to='/about'>About</Link></li>
              <li className='p__opensans'><a href='#Contact'>Contact</a></li>
              <li className='p__opensans'><a href='#Menu'>Menu</a></li>
              <li className='p__opensans' style={{ borderTop: '1px dotted gold', paddingTop: '2rem', color: 'goldenrod' }}><a href='#Gallery'>Gallery</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}


export default Navbar;
