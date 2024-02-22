import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; 
import { Home, About } from './pages'


import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <Router>
  <div>
   <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      
      <Route path='/' exact render={(props) => (
        <>
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <Intro />
          <Gallery />
          <FindUs />
          <Footer />
        </>
      )}/>
  </Routes>
    
  </div>
  </Router>
);

export default App;
