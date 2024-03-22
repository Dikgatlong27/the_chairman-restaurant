import React from 'react';

import { FaWhatsapp } from 'react-icons/fa';

import { SubHeading } from '../../components';

import { images } from '../../constants';
import './FooterOverlay.css';

const FooterOverlay = () => (
    <div className="app__footerOverlay">
      <div className="app__footerOverlay-contents app__bg section__padding flex__center">
        <div className='app__footerOverlay-aboutUs'>
          <SubHeading title='About Us' />
          
          <p className='p__opensans'>At The Chairman Fortaleza De Sol experience a culinary sanctuary where the flavors of Portuguese, Italian, Greek, and African cuisines come together. Our name reflects opulence and excellence, catering to those who savor life's exquisite pleasures.</p>
        </div>

        <div className="app__footerOverlay-img">
          <img src={images.C} alt="logo" />
          <p className="p__opensans" id='copyright'>&copy; 2024 the chairman fortaleza de sol</p>
        </div>

        <div className='app__footerOverlay-contactUs'>
          <SubHeading title='Contact Us' />

          <p className='p__opensans'>129 Duxbury Rd.</p>
          <p className='p__opensans'>Hatfield</p>
          <p className='p__opensans'>Pretoria 0083</p>
          <p className='p__opensans'>Gauteng</p>
          <p className='p__opensans'>South Africa</p>

          <div className="app__footerOverlay-contactUs_whatsapp flex__center">
            <FaWhatsapp size={20} color= 'green' />
            <a className='p__opensans' href='https://wa.me/27676228529' target='_blank' rel='noreferrer'>WhatsApp Us</a>
          </div>
        </div>
      </div>
    </div>
  );
export default FooterOverlay;
