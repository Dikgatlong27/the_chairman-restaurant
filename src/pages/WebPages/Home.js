import React from 'react';
import { Navbar, VacanciesPostsAtHome } from '../../components'; 
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from '../../container';

const Home = () => {
  return (
    <>
      <Navbar />
      <VacanciesPostsAtHome />
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
