import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/letter-logo-transparent.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>
        <NavLink to="/product" className="nav-link">
          Productos
        </NavLink>
        <NavLink to="/proyectos" className="nav-link">
          Proyectos
        </NavLink>
        <NavLink to="/contacto" className="nav-link">
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
