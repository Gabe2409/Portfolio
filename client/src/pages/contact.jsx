import React from 'react';
import MainLayout from '/components/MainLayout';
import '/src/styles/contact.css'; 


const Contact = () => {
  return (
    <MainLayout>
      <div className="contact-container">
        <h2 className="contact-heading">Get in Touch</h2>
        <p className="contact-subheading">Feel free to contact me anytime</p>
        <div className="contact-content">
          <form className="contact-form">
            <h3>Message Me</h3>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message"></textarea>
            </div>
            <button type="button">Send Message</button>
          </form>
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Always available if the right project comes along, Feel free to contact me!</p>
            <ul>
              <li><i className="icon fa fa-user"></i><strong>Name:</strong> Gabriel Beharry</li>
              <li><i className="icon fa fa-map-marker"></i><strong>Location:</strong> Toronto, Canada</li>
              <li><i className="icon fa fa-phone"></i><strong>Call Me:</strong> +226 200 1815</li>
              <li><i className="icon fa fa-envelope"></i><strong>Email Me:</strong> beharrygabriel1@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;