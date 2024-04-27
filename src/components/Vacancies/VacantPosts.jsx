import React from 'react';

import './VacantPosts.css'


const VacantPosts = ( {title, description, tags} ) => {
  return (
    <div>
        <div className="app__vacantPosts">
            <h3 className='p__cursive' style={{marginBottom:'1rem'}}>{title}</h3>
            <p className='p__opensans' style={{color:'#aaa'}}>{description}</p>
        </div>
    </div>
  )
}

export default VacantPosts
