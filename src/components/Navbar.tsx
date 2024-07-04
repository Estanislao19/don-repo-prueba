import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/letter-logo-transparent.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Inicio
        </NavLink>
        <NavLink
          to="/productos"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Productos
        </NavLink>
        <NavLink
          to="/proyectos"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Contacto
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;