import React from 'react';
import Welcome from "./components/Welcome.js";
import './App.css';
import Explanation from "./components/Explanation.js";
import Decorations from "./components/Decorations.js";
import Button from "./components/Button.js";
import Camera from "./components/Camera.js";

function Home() {
  

  return (
    <div className="App">
    <Welcome />
    <Explanation />
    <Button />
    <Decorations />
      
    </div>
  );
}

export default Home;
