import React from 'react';
import { Navbar, FooterOverlay, SubHeading, MenuItem} from '../../components'; 
import { MenuData } from '../../constants';
import MenuPDF from './MenuPDF';
import { PDFDownloadLink } from '@react-pdf/renderer';

import './Menu.css';


const Menu = () => {

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
                <MenuItem key={kitchen.title + index} title={kitchen.title} price={kitchen.price} tags={kitchen.tags} />
              ))}
            </div>
          </div>

          <div className='app__menu-hero_sushi flex__center'>
            <h2 className='app__mwnu-hero-menu_heading'>Sushi Delicacies</h2>
            <div className='line' />

            <div className='app__menu-hero_ourMenu'>
              {MenuData.sushi.map((sushi, index) => (
                <MenuItem key={sushi.title + index} title={sushi.title} price={sushi.price} tags={sushi.tags} />
              ))}
            </div>
          </div>

        </div>


        <PDFDownloadLink document={<MenuPDF />} fileName='FULLMENU'>
          {({loading}) => 
            loading ? (
            < button className='custom__button'>Loading Menu...</button>
            ) : (
              <button className='custom__button'>Download</button> 
            )
          }
        </PDFDownloadLink> 

        
        
      </div>
      <FooterOverlay />
    </>
  )
}

export default Menu;