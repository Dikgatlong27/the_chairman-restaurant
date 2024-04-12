import React from 'react';
import { Navbar, FooterOverlay, SubHeading  } from '../../components';

import './About.css';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="app__about">
        <SubHeading title={'About Us'} />
        <div className="app__about-content">
          
          <p className="p__opensans">
            Welcome to The Chairman Fortaleza de Sol, where exquisite dining experiences await you.
            Our restaurant is renowned for its fine cuisine, impeccable service, and elegant ambiance.
            Whether you're celebrating a special occasion or simply indulging in a memorable meal,
            we strive to exceed your expectations with every dish we serve.
          </p>
          <p className="p__opensans">
            Our mission is to provide our guests with an unparalleled dining experience that
            combines exceptional food, attentive service, and a warm, inviting atmosphere.
            We source the finest ingredients and prepare each dish with care and precision,
            ensuring that every bite is a delight for the senses.
          </p>
          <p className="p__opensans">
            Our vision is to be the premier destination for fine dining in the Fortaleza de Sol region,
            known for our commitment to quality, innovation, and excellence in hospitality.
            We aim to create lasting memories for our guests and cultivate a loyal following
            of discerning diners who appreciate the finer things in life.
          </p>
        </div>
      </div>
      <FooterOverlay />
    </>
  )
}

export default AboutUs
