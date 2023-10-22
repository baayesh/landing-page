import Video from "./Assets/Video.mp4";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Congratz from "./Pages/Congratz";

function App() {
  return (
    <div className="App">
      <video className="Vid" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="tagwrap">
        <h1 className="tag">Break the Silence - End the Violence</h1>
      </div>
      <Link to="/congratz" class="button" id="button-3">
        LAUNCH SOCIAL MEDIA
      </Link>
    </div>
  );
}

export default App;
