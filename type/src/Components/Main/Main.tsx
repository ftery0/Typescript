import React from "react";
import "./main.scss";
import Clock from "../clock/Clock";
import backgroun from "src/Assets/img/beiheng-guo-IAVVv6z3D6g-unsplash.jpg"
import Header from "../head/header";
function Main() {
  return (
    <>
    <Header />
    <div className="main">
    <img className="img" src={backgroun}/>
      <div className="clock">
        <Clock />
      </div>
    </div>
    </>
  );
}
export default Main;
