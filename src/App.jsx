import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Contact />
    <Footer />
  </>
);

export default App;
