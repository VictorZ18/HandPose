import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../Canvas';

function Button() {
    const buttonGo = document.querySelector(".Button");
  const buttonClicked = () => {
    buttonGo.addEventListener("click", () => {
      console.log("Button clicked!");
    }
    )
  }
  return (
    <div className="Button" >
        <Link to="/Canvas"><button onClick={ buttonClicked } className="buttonGo">Let's go!</button></Link>
    </div>
  );
}

export default Button;