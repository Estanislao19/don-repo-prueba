import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar Routes y Route desde react-router-dom
import Home from './pages/Home'; // Asegúrate de importar el componente Home desde la ubicación correcta
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
        <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Puedes agregar más rutas usando Route según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App