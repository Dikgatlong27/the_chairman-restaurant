import React from 'react';
import { Navbar, FooterOverlay, SubHeading, OurMenu, SushiMenu } from '../../components'; 
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
          
          <div className='app__menu-hero_kitchen-dishes'>
            <h2 style={{color:'#DCCA87'}}>House Specialties</h2>
            <div className='line' />

            <div className='app__menu-hero_ourMenu section__padding'>
              {MenuData.kitchen.map((kitchen, index) => (
                <OurMenu key={kitchen.title + index} title={kitchen.title} price={kitchen.price} tags={kitchen.tags} />
              ))}
            </div>
            
          </div>

          <div className='app__menu-hero_sushi-dishes'>
            <h2 style={{color:'#DCCA87'}}>Sushi Delicacies</h2>
            <div className='line' />

            <div className='app__menu-hero_sushiMenu section__padding'>
              {MenuData.sushi.map((sushi, index) => (
                <SushiMenu />
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