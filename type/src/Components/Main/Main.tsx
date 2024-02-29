import React, { useState } from "react";
import "./main.scss";
import Clock from "../clock/Clock";
import background1 from "src/Assets/img/beiheng-guo-IAVVv6z3D6g-unsplash.jpg";
import background2 from "src/Assets/img/18.jpeg";
import background3 from "src/Assets/img/14.jpeg";
import background4 from "src/Assets/img/124.jpeg"
import Header from "../head/header";

function Main() {
  const [backgroundImage, setBackgroundImage] = useState(background1);

  const handleMinuteChange = (minutes: number) => {
    if (minutes % 4 === 0) {
      setBackgroundImage(background1);
    } else if (minutes % 4 === 1) {
      setBackgroundImage(background2);
    } else if (minutes % 4 === 2) {
      setBackgroundImage(background3);
    } else {
      setBackgroundImage(background4);
    }
  };


  return (
    <>
      <Header />
      <div className="main">
        <img className="img" src={backgroundImage} alt="background" />
        <div className="clock">
          <Clock onMinuteChange={handleMinuteChange} />
        </div>
      </div>
      <div className="main2">
        
      </div>
    </>
  );
}

export default Main;
