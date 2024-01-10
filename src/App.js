
import React, { useRef, useState, useEffect } from "react";
import { AGesture, BGesture, CGesture, DGesture, EGesture, FGesture, GGesture, HGesture, IGesture, JGesture, KGesture, LGesture, MGesture, NGesture, OGesture, PGesture, QGesture, RGesture, SGesture, TGesture, UGesture, VGesture, WGesture, XGesture, YGesture, ZGesture } from "./Gestures.js";
import { drawHand } from "./Hand.js";

import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./App.css";
import * as fp from "fingerpose";
import thumbs_up from "./thumbs_up.png";


function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [emoji, setEmoji] = useState(null);
  const images = { thumbs_up: thumbs_up };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
 
    setInterval(() => {
      detect(net);
    }, 150);
  };

  console.log(fp.Gestures.ThumbsDownGesture);
  

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
        ];
        const GE = new fp.GestureEstimator(newGestures);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const mxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          console.log(gesture.gestures[mxConfidence].name);
        }
      }
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  };

  useEffect(()=>{runHandpose()},[]);

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: '600px',
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '600px',
            right: '0px',
            textAlign: 'center',
            width: '640px',
            height: '480px'
          }}
        />
        {emoji !== null ? (
          <img
            src={images[emoji]}
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              top: '200px',
              right: '500px',
              textAlign: 'center',
              height: '100px'
            }}
          />
        ) : (
          ""
        )}

      </header>
    </div>
  );
}

export default App;
