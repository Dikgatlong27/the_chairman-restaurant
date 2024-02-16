import React from 'react';

import { SubHeading } from '../../components';
import './FooterOverlay.css';

const FooterOverlay = () => (
    <div className='app__footerOverlay section__padding'>\
        <SubHeading title='Subscribe' />
        <p className="p__opnsans" style={{color: '#bbb'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, quibusdam?</p>
        <div className="app__footerOverlay-subscribe">
          <input type="email" name="email" id="email" />
          <input type="button" value="Send" />
        </div>
    </div>
  );
export default FooterOverlay;
