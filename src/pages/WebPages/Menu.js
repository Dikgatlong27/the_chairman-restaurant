import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, FooterOverlay, SubHeading } from '../../components'; 

import './Menu.css';


const Menu = () => {

  const kitchenDishes = [
    'Peri Peri Chicken',
    'Fillet On The Bone',
    'Tomahawk Steak',
    'Chicken Wings',
    'Lamb Shank',
  ];

  const sushiDishes = [
    'Tokyo Tasting',
    'Kyoto Platter',
    'Sushi And Sashimi Fusion',
    'Sushi Platter',
  ]

  return (
    <>
      <Navbar />


      
      <div className='about__h-one' style={{background: '#000', textAlign: 'center', padding: '2rem 0' }}>
        <SubHeading  title={'Explore Our Delicious Menu'}/>

        <div className='app__menu-hero'>
          
          <div className='app__menu-hero_kitchen-dishes'>
            <h2 style={{color:'#555'}}>Kitchen Dishes</h2>
            <div className='line' />
            <ul>
              {kitchenDishes.map((dish, index) => (
                <li className='p__opensans' key={`kitchen-dish-${index}`}>{dish}</li>
              ))}
            </ul>
          </div>

          <div className='app__menu-hero_sushi-dishes'>
            <h2 style={{color:'#555'}}>Sushi Platters</h2>
            <div className='line' />
            <ul>
              {sushiDishes.map((dish, index) => (
                <li className='p__opensans' key={`sushi-dish-${index}`}>{dish}</li>
              ))}
            </ul>
          </div>

        </div>




        
        <h1 className='dwnld_h1' style={{ color: '#ccc', marginBottom: '2rem'}}>Download our full menu</h1>
        <a target='_blank' href='../WebPages/menu.pdf' download className='custom__button'>Download</a>
      </div>
      <FooterOverlay />
    </>
  )
}

export default Menu;