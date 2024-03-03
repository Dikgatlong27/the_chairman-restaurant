import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'; 
import { Home, About, Contact, Menu, GalleryPage, Reservation } from './pages'


import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar, ScrollToTopBtn } from './components';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/gallery page' element={<GalleryPage/>} />
          <Route path='/reservation' element={<Reservation/>} />

          // Buttons

          // SpecialMenu view-more
          <Route path='/menu' exact render={(props) => (<SpecialMenu />)} />

          // Gallery explore
          <Route path='/gallery page' exact render={(props) => (<Gallery />)} />

          // Buttons
          
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
            )}
          />
      </Routes>
    </div>
  </Router>
);

export default App;
