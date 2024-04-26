import React from 'react';
import { Navbar, FooterOverlay, SubHeading, VacantPosts} from '../../components'; 

import './Vacancies.css'


const Vacancies = () => {
  return (
    <>
      <Navbar /> 
      <div className="section__padding">
        <SubHeading title='Vacancy Posts' />
          
        <div className="sliding-section">
          <h2 className='app__vacanciesPosts-sub'>Featured Job Openings</h2>

          <div className="slider">
      
            <VacantPosts />
            
            <VacantPosts />
          </div>
        </div>
      </div>
      <FooterOverlay />
    </>
  )
}

export default Vacancies
