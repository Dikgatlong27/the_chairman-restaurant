import React from 'react';

import './OurMenu.css';

const OurMenu = ( {title, price, tags} ) => (
    <div className='app__ourMenu'>
        <div className="app__ourMenu-head">
            <div className="app__ourMenu-head_name">
                <p className="p__cursive" style={{ color: '#DCCA87' }}>{title}</p>
            </div>

            <div className='app__ourMenu-line' />

            <div className="app__ourMenu-price">
                <p className="p__cursive">{price}</p>
            </div>
        </div>

        <div className="app__ourMenu-tag">
            <p className='p__opensans'>{tags}</p>
        </div>
    </div>
  )


export default OurMenu
