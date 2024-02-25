import React, { useState } from "react";
import "./main.scss";
import Clock from "../clock/Clock";
import background1 from "src/Assets/img/beiheng-guo-IAVVv6z3D6g-unsplash.jpg";
import background2 from "src/Assets/img/18.jpeg";
import background3 from "src/Assets/img/14.jpeg";
import background4 from "src/Assets/img/124.jpeg"
import Header from "../head/header";

function Main() {
  const backgrounds = [background1, background2, background3, background4];
  const [backgroundImage, setBackgroundImage] = useState(background1);

  const handleMinuteChange = () => {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setBackgroundImage(backgrounds[randomIndex]);
  };

  return (
    <>
      <Header />
      <div className="main">
        <img className="img" src={backgroundImage} />
        <div className="clock">
          <Clock onMinuteChange={handleMinuteChange} />
        </div>
      </div>
    </>
  );
}

export default Main;
