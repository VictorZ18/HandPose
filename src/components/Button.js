import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../Canvas';

function Button() {
    
  return (
    <div className="Button" >
        <Link to="/Canvas"><button className="buttonGo">Let's go!</button></Link>
    </div>
  );
}

export default Button;