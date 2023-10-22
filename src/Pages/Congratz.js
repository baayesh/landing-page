import React from "react";
import Video1 from "../Assets/Video1.mp4";
import "./Congratz.css"


function Congratz() {
  return (
    <div>
      <video className="Vid" autoPlay muted >
        <source src={Video1} type="video/mp4" />
      </video>
      <h1 className="text">Congratulation</h1>
    </div>
  );
}

export default Congratz;
