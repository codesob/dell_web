import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Support from './components/Support';
import News from './components/News';
import Header from './components/Header';
import Footer from './components/Footer';
import Client from './components/Client';
import Contact from './components/Contact';
import Body from './components/Body';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/news" element={<News />} /> 
          <Route path="/" exact component={Body} />
          <Route path="/contact" element={<Contact />} />
         
       
        </Routes>
        <Client />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
