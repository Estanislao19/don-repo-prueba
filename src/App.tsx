// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import './App.css';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/product" element={<Products />} />
            {/* Puedes agregar más rutas usando Route según sea necesario */}
            
          </Routes>
        </div>
      
      </div>
    </Router>
  );
}

export default App;