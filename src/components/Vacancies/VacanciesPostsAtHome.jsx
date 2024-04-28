import React from 'react';
import { Link } from 'react-router-dom'; 


import './VacanciesPostsAtHome.css';

const VacanciesPostsAtHome = () => {
  return (
    <div className="sliding-text-container" style={{background:'#111'}}>        
        <h2>Featured Job Openings</h2>
        <p className="p__opensans sliding-text">Join us at our newest branch at The Gables Mall in Eswatini! Explore available opportunities on our vacancies page. Explore available opportunities on our vacancies page. </p>
        <li className='vacancies-btn_mobile'><Link to='/vacancies'>See Posts</Link></li>
    </div>
  )
}

export default VacanciesPostsAtHome;
