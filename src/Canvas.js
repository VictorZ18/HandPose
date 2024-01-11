import React from 'react';
import './App.css';
import Camera from "./components/Camera.js";
import Welcome from "./components/Welcome.js";
import ASL from "./images/ASL.jpg";

function Canvas() {
    return (
        <div className="Canvas">
            <Welcome />
            <Camera />
          
        </div>
    );
}

export default Canvas;