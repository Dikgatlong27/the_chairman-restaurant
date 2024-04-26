import React from 'react';
import { Link } from 'react-router-dom'; 

import './VacantPosts.css'


const VacantPosts = () => {
  return (
    <div>
        <div className="slide">
            <h3 className='p__cursive'>Sues Chef</h3>
            <p className='p__opensans'>Produces high quality plates, including both design and taste. Oversees and supervises kitchen staff. Assists with menu planning, inventory, and management of supplies. Ensures that food is top quality and that kitchen is in good condition.</p>
            <Link to="/vacancies/job1" className="custom__button">Apply</Link>
        </div>
    </div>
  )
}

export default VacantPosts
