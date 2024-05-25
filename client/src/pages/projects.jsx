import React from 'react';
import MainLayout from '/components/MainLayout';
import '/src/styles/projects.css'; 

const Projects = () => {
  return (
    <MainLayout>
      <div className="projects-container">
        <h2 className="projects-heading">Projects</h2>
        <p className="projects-subheading">Showcasing some of my best work</p>
        <div className="projects-filter">
          {/* TO DO 

          <button className="filter-button active">ALL</button>
          
          */}
        </div>



        
        <div className="projects-grid">
          <div className="project-item">
            <img src="/src/assets/Logo.jpg" alt="Project 1" />
            <h3>Ecommerce Website</h3>
            <p>Role:Lead Developer</p>
            <p>Outcome: Successful deployment of a immensly popular toys website that serves over 5000+ customers daily.</p>
          </div>
          <div className="project-item">
            <img src="/src/assets/Logo.jpg" alt="Project 2" />
            <h3>LMS Platform for Children</h3>
            <p>Role: Lead Developer</p>
            <p>Outcome: Popular online learning platform for children</p>
          </div>
          <div className="project-item">
            <img src="/src/assets/Logo.jpg" alt="Project 3" />
            <h3>Integrated CRM System</h3>
            <p>Role: Developer</p>
            <p>Outcome: Effective management and timely delivery of the project.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Projects;