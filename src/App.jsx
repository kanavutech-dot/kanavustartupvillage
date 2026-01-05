import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Development from './pages/Development';
import Digital from './pages/Digital';
import Hub from './pages/Hub';
import Contact from './pages/Contact';
import Academy from './pages/Academy';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Web from './pages/Web';
import AI from './pages/AI';
import Flutter from './pages/Flutter';
import Software from './pages/Software';
import Cloud from './pages/Cloud';
import UiUx from './pages/UiUx';
import Studio from './pages/Studio';
import Seo from './pages/Seo';
import Sem from './pages/Sem';
import Smo from './pages/Smo';
import Smm from './pages/Smm';
import Design from './pages/Design';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web" element={<Web />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/flutter" element={<Flutter />} />
          <Route path="/software" element={<Software />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/uiux" element={<UiUx />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/sem" element={<Sem />} />
          <Route path="/smo" element={<Smo />} />
          <Route path="/smm" element={<Smm />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/academy" element={<Academy />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
