import React from "react";
import Video1 from "../Assets/Video1.mp4";


function Congratz() {
  return (
    <div>
      <video className="Vid" autoPlay muted loop>
        <source src={Video1} type="video/mp4" />
      </video>
    </div>
  );
}

export default Congratz;
