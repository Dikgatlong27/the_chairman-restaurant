import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; 
import { Home, About, Contact, Menu, Vacancies, GalleryPage, Reservation } from './pages';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu } from './container';
import { Navbar, VacanciesPostsAtHome } from './components';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <Router>
    <ScrollToTop />
    <div id='app'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/vacancies' element={<Vacancies/>} />
        <Route path='/gallery page' element={<GalleryPage/>} />
        <Route path='/reservation' element={<Reservation/>} />

        {/* SpecialMenu view-more */}
        <Route path='/menu' exact render={(props) => (<SpecialMenu />)} />

        {/* Gallery explore */}
        <Route path='/gallery page' exact render={(props) => (<Gallery />)} />

        {/* Buttons */}
        <Route path='/' exact render={(props) => (
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
        )} />
      </Routes>
    </div>
  </Router>
);

export default App;
