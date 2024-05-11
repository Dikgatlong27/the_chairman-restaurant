import React from 'react';
import { Navbar, FooterOverlay, SubHeading, ContactForm, GetInTouch, Social } from '../../components'; 

import './Contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='app__contactUs' style={{background: '#000', textAlign: 'center'  }}>
        <div className='section__padding'>
          <SubHeading  title={'Enquiries'}/>
          <h1 style={{ color: '#ccc'}}>Please fill out the form below, or contact us directly.</h1>
          
          <div className='app__contactUs-contact flex__center'>
          <ContactForm />

          <GetInTouch />
          </div>
        </div>
      </div>
      <div className='app__bg section__padding'>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe title='directions' id="gmap_canvas" src="https://maps.google.com/maps?q=129%20Duxbury%20Rd,%20Hatfield,%20Pretoria,%200083&t=&z=15&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </div>
      </div>
      
      <div className='app__contactUs-social section__padding'>
        <SubHeading  title={'Follow us on Social Meadia'}/>
        
        <Social />
      </div>
      <FooterOverlay />
    </>
  )
}

export default Contact
