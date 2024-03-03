import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

import './ScrollToTopBtn.css';

const ScrollToTopBtn = () => {
  return (
    <div className='app__scrollToTop section__padding'>
        <h1>Scroll to top</h1>
        <button>
            <FaArrowUp size={30} color='#fff'/>
        </button>
    </div>
  )
}

export default ScrollToTopBtn
