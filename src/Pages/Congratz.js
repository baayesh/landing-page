import React from "react";
import Video1 from "../Assets/Video1.mp4";
import loadingbar from "../Assets/loading bar effect.mp4";
import "./Congratz.css"


function Congratz() {
  return (
    <div>
      <video className="Vid" autoPlay muted >
        <source src={loadingbar} type="video/mp4" />
      </video>
    </div>
  );
}

export default Congratz;
