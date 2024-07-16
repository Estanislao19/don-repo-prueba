import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo-banner.svg';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <img className="logooo" src={logo} alt="Logo" />
      </div>
      <div className="about-us">
        <h2>Nosotros</h2>
        <div className="about-content">
          <p>Fundada en 1983, Norte Maderas, se ha consolidado como un referente en la venta de maderas y materiales de construcción en la ciudad de Santa Fe.</p>
          <p>Nuestra sede se encuentra en Blas Parera 7798, Santa Fe, un punto estratégico que nos permite atender a nuestros clientes de manera óptima.</p>
          <p>Ofrecemos una amplia gama de productos de alta calidad, incluyendo:</p>
          <ul>
            <li>Madera de diferentes tipos y medidas, tales como: machimbre, tirantes y multilaminados</li>
            <li>Muebles a medida, diseñados y fabricados por nuestro equipo</li>
            <li>Aislantes térmicos para la construcción</li>
            <li>Pinturas, lacas y barnices de la mejor calidad</li>
            <li>Fibrofácil, tableros de pino y otras maderas, chapadur, terciado y fenolicos</li>
          </ul>
          <p>En Norte Maderas nos comprometemos a brindar productos y servicios de excelencia. Nuestra prioridad es la satisfacción y fidelidad de quienes confían en nosotros. Nos regimos por valores de honestidad y responsabilidad.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
