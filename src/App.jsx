import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Development from './pages/Development';
import Digital from './pages/Digital';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development" element={<Development />} />
          <Route path="/digital" element={<Digital />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
