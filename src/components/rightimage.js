import "./App.css";
import React from "react";
import image5 from "../images/image5.jpg"; // Import the image

const CustomContent = () => {
  return (
    <div className="custom-container">
      <div className="custom-content">
        <h2>Watch Application</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="custom-buttons">
          <button className="btn btn-primary">Button 1</button>
          <button className="btn btn-secondary">Button 2</button>
        </div>
      </div>
      <div className="custom-image-container">
        <img src={image5} alt="Image" className="custom-image" />
      </div>
    </div>
  );
};

export default CustomContent;
