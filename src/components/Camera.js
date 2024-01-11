import React, { useRef, useState, useEffect } from "react";
import { AGesture, BGesture, CGesture, DGesture, EGesture, FGesture, GGesture, HGesture, IGesture, JGesture, KGesture, LGesture, MGesture, NGesture, OGesture, PGesture, QGesture, RGesture, SGesture, TGesture, UGesture, VGesture, WGesture, XGesture, YGesture, ZGesture } from "../Gestures.js";
import { drawHand } from "../Hand.js";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import * as fp from "fingerpose";
import thumbs_up from "../thumbs_up.png";
import ASL from "../images/ASL.jpg";

function Camera() {

const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
 
    setInterval(() => {
      detect(net);
    }, 10);
  };

  console.log(fp.Gestures.ThumbsDownGesture);
  
  let result = "";
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
 
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);
      
   
      if (hand.length > 0) {
        
        const newGestures = 
        [
          AGesture, 
          BGesture, 
          CGesture, 
          DGesture, 
          EGesture, 
          FGesture, 
          GGesture, 
          HGesture, 
          IGesture, 
          JGesture, 
          KGesture, 
          LGesture, 
          MGesture, 
          NGesture, 
          OGesture, 
          PGesture,
          QGesture,
          RGesture,
          SGesture,
          TGesture,
          UGesture,
          VGesture,
          WGesture,
          XGesture,
          YGesture,
          ZGesture
        ];
        const GE = new fp.GestureEstimator(newGestures);
        const gesture = await GE.estimate(hand[0].landmarks, 8);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const mxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          result = gesture.gestures[mxConfidence].name
          document.querySelector(".Result").innerHTML = result;
          console.log(result);

        }
      }
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
  <header className="grid-container">
    <div  className="CanvasExplanation">
            <p>
                You can now make signs with your hand!<br></br>
                Let's see if the AI can recognize which letter you're trying to do.<br></br>
            </p>
            <p>
                (It may take multiple tries for the AI to recognize a letter,<br></br>
                you can vary the angle or oritentation of your hand to help it.)<br></br>
            </p>
            <p>
              Here is some inspiration to test our AI:
            </p>
            <img className="ASL" src={ASL} alt="ASL Alphabet" />
    </div>
    <Webcam
      ref={webcamRef}
    />

    <canvas
      ref={canvasRef}
    />
    <div className="Letter">
        <p>
            The AI thinks you're making the letter:
        </p>
        <h1 className="Result">
        </h1>
        <p className="Accuracy">
        </p>
    </div>
  </header>
  );
}

export default Camera;