import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { FooterOverlay } from '../../components'; 
import './Footer.css';

const Footer = () => (
  <div className='app__footer '>

    <FooterOverlay />

    <div className="app__footer_contents app__bg section__padding">
    
      <div>
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, nesciunt.</p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </div>
  </div>
);

export default Footer;
