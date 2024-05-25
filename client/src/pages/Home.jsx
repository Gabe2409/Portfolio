import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '/components/MainLayout';
import '/src/styles/home.css'; 


const Home = () => {
  return (
    <MainLayout>
      <div className="home-container">
        <div className="welcome-section">
          <h1>Welcome to My Portfolio</h1>
          <p>Hello! I'm Gabriel Beharry, a passionate Web Developer with great experience in website design and building, and with WordPress. Lets connect sometime!. Explore my work and get to know more about me.</p>
          <Link to="/about" className="about-link">
            <button className="about-button">About Me</button>
          </Link>
        </div>
        <div className="mission-statement">
          <h2>Mission Statement</h2>
          <p>I aim to deliver high-quality, passionate and innovative solutions that support businesses and individuals by providing value. I am committed to continuous learning and excellence in every project I undertake.</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;