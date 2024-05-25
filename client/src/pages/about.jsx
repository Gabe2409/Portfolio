import React from 'react';
import MainLayout from '/components/MainLayout';
import '/src/styles/about.css'; 
import profileImage from '/src/assets/portrait.jpg'; 


const About = () => {
  return (
    <MainLayout>
      <div className="about-container">


      <h2 className="resume-heading">About Me</h2>
        <p className="resume-subheading">Check out my Resume</p>

        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <p>Hello! I'm Gabriel Beharry. Web designer & Developer from Trinidad & Tobago. I have great experience in website design and building, and with WordPress. Lets connect sometime!</p>
            <div className="profile-info">
              <p><strong>Age:</strong> 24</p>
              <p><strong>Freelance:</strong> Available</p>
              <p><strong>Phone:</strong> +226 200 1815</p>
              <p><strong>Residence:</strong> Toronto</p>
              <p><strong>Email:</strong> beharrygabriel1@gmail.com</p>
            </div>
            <button className="download-cv">Download CV</button>
          </div>
        </div>


        <div className="resume-content">
          <div className="resume-section">
            <h3>Education</h3>
            <div className="resume-item">
              <i className="icon fa fa-graduation-cap"></i>
              <div>
                <h4>Advanced Diploma</h4>
                <p>Centennial College / 2024 -</p>
                <p>Software Engineering Technology</p>
              </div>
            </div>
            <div className="resume-item">
              <i className="icon fa fa-graduation-cap"></i>
              <div>
                <h4>Bachelor's Degree</h4>
                <p>UWI ROYTEC / 2017 - 2019</p>
                <p>Information Systems Management</p>
              </div>
            </div>
            <div className="resume-item">
              <i className="icon fa fa-graduation-cap"></i>
              <div>
                <h4>Associates Degree</h4>
                <p>UWI ROYTEC / 2015 - 2017</p>
                <p>Information Systems Management</p>
              </div>
            </div>
          </div>

        {/* Experience Section */}

          
          <div className="resume-section">
            <h3>Experience</h3>
            <div className="resume-item">
              <i className="icon fa fa-briefcase"></i>
              <div>
                <h4>Web Developerr</h4>
                <p>Star Global Production Studios / 2020 - 2023</p>
                <p>Lead Web Designer. Head I.T. Responsible for implementation and maintenance of new software solutions.</p>
              </div>
            </div>
            <div className="resume-item">
              <i className="icon fa fa-briefcase"></i>
              <div>
                <h4>I.T Support Specialist</h4>
                <p>Micro Data Solutions/ 2017-2020</p>
                <p>    </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
