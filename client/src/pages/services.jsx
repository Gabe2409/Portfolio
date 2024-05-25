import React from 'react';
import MainLayout from '/components/MainLayout';
import '/src/styles/services.css'; 


const Services = () => {
  return (
    <MainLayout>
      <div className="services-container">
        <h2 className="services-heading">Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <i className="icon fa fa-code"></i>
            <h3>Web Development</h3>
            <p>Modern and mobile-ready website development.</p>
          </div>
          <div className="service-item">
          <i className="icon fa fa-code"></i>
            <h3>Wordpress Development</h3>
            <p>Professional Wordpress developmen.t</p>
          </div>
          <div className="service-item">
            <i className="icon fa fa-bullhorn"></i>
            <h3>Social Media Management</h3>
            <p>Professional Social Media Growth</p>
          </div>
         
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;