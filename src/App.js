// App.js

import React from "react";
import Navbar from "./components/navbar";
import Slider from "./components/Slider";
import Leftimage from "./components/leftimage";
import Rightimage from "./components/rightimage";
import Footer from "./components/footer";
import "./components/App.css";
// index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Leftimage />
      <Rightimage />
      <Leftimage />
      <Footer />
    </div>
  );
}

export default App;
