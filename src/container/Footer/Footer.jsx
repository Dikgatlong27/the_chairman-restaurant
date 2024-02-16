import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { Newsletter, FooterOverlay } from '../../components'; 
import './Footer.css';

const Footer = () => (
  <div className='app__footer '>

    <Newsletter />

    <FooterOverlay />
  </div>
);

export default Footer;
