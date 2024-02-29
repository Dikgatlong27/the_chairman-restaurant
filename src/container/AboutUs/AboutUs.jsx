import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.C} alt="C letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cursive">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>Welcome to The Chairman Fortaleza de Sol, a culinary sanctuary where the rich tapestry of Portuguese, Italian, Greek, and African cuisines unfolds. Our name, The Chairman Fortaleza de Sol, speaks volumes about who we are and who we cater to. 
        <div />
        Translated as "The Chairman's Fortress under the sun", it embodies our commitment to opulence, style, and an unwavering pursuit of excellence. We pride ourselves on being a high-end, upmarket eatery, catering to those who appreciate the exquisite pleasures of life.</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cursive">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className='p__opensans'>The story of The Chaairman Fortaleza de Sol began with a visionary named Mr. Maphanga, affectionately known as the Chairman. Fueled by his passion for culinary excellence, the Chairman brought together a group of like-minded individuals to turn his dream into a reality. With unwavering determination and a shared commitment to gastronomic innovation, they embarked on a journey to create a dining destination like no other.Drawing inspiration from diverse culinary traditions and a deep-rooted appreciation for fine cuisine, the Chairman and his team set out to redefine the culinary landscape.</p> 
        
        {/* <p>Their collaborative spirit and dedication to excellence laid the foundation for what would soon become a beacon of culinary creativity and hospitality. Through countless hours of planning, experimentation, and unwavering dedication, the vision of The Chaairman Fortaleza de Sol began to take shape. Today, we stand as a testament to the Chairman's bold vision and the collective efforts of those who shared his dream. As we continue to evolve and innovate, our commitment to culinary excellence remains unwavering. Join us on a journey of culinary discovery and unparalleled hospitality, as we celebrate the enduring legacy of the Chairman and the dream that started it all.</p> */}
        <button type='button' className='custom__button'>Know more</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
