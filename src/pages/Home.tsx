import React from 'react';
import '../styles/Home.css';
import logo from '../assets/logo-banner.svg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="banner">
        <img className='logooo' src={logo} alt="Logo" />
        
      </div>
      <div className="about-us">
        <h2>Nosotros</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
    </div>
  );
};

export default Home;