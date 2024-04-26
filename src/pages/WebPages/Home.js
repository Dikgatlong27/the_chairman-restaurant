import React from 'react';
import { Navbar, VacanciesPosts } from '../../components'; 
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from '../../container';

const Home = () => {
  return (
    <>
      <Navbar />
      <VacanciesPosts />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </>
    
  )
}

export default Home
