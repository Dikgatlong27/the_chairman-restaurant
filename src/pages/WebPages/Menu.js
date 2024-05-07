import React from 'react';
import { Navbar, FooterOverlay, SubHeading, MenuItems} from '../../components'; 
import { MenuData } from '../../constants';

import './Menu.css';


const Menu = () => {

  const pdfURL = 'https://s3.eu-west-1.amazonaws.com/www.chairmanforte.co.za/media_uploads/MENU.pdf'

  return (
    <>
      <Navbar />      
      <div className='about__h-one' style={{background: '#000', textAlign: 'center', padding: '2rem 0' }}>
        <SubHeading  title={'Explore Our Delicious Menu'}/>

        <div className='app__menu-hero'>
          
          <div className='app__menu-hero_kitchen flex__center'>
            <h2 className='app__mwnu-hero-menu_heading'>House Specialties</h2>
            <div className='line' />

            <div className='app__menu-hero_ourMenu'>
              
              {MenuData.kitchen.map((kitchen, index) => (
                <MenuItems key={kitchen.title + index} image={kitchen.image} title={kitchen.title} price={kitchen.price} tags={kitchen.tags} />
              ))}
            </div>
          </div>

          <div className='app__menu-hero_sushi flex__center'>
            <h2 className='app__mwnu-hero-menu_heading'>Sushi Delicacies</h2>
            <div className='line' />

            <div className='app__menu-hero_ourMenu'>
              {MenuData.sushi.map((sushi, index) => (
                <MenuItems key={sushi.title + index} image={sushi.image} title={sushi.title} price={sushi.price} tags={sushi.tags} />
              ))}
            </div>
          </div>

        </div>


        <div style={{marginBottom: '2rem'}}>
          <p className='p__cursive' style={{marginBottom: '2rem'}}>Click the button below to download the full menu:</p>
          <a href={pdfURL} target="_blank" rel="noopener noreferrer" className='custom__button'>Full Menu</a>
        </div>
        
        
      </div>
      <FooterOverlay />
    </>
  )
}

export default Menu;