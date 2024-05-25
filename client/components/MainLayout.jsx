import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/Logo.jpg'; 

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
