import React from 'react';

import { SubHeading } from '../../components';
import './Newsletter.css';

const Newsletter = () => (
    <div className='app__newsletter section__padding'>
        <SubHeading title='Subscribe' />
        <p className="p__opensans" style={{color: '#bbb', marginBottom: '2rem'}}>Subscribe to our newsletter for specials, events, and more delights.</p>
        <div className="app__newsletter-subscribe">
          <input className='custom__button' type="email" name="email" id="email" placeholder='enter your email' style={{marginRight: '1.5rem'}} />
          <input className='custom__button' type="button" value="Send"  />
        </div>
    </div>
  );

export default Newsletter;
