import "./App.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Footer Heading</h5>
            <p>
              This is a footer section where you can include some information
              about your website or company.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact</h5>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
