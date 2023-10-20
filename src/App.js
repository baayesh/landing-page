import Video from "./Assets/Video.mp4";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video className="Vid" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <a href="#" class="button" id="button-3">
        CLICK HERE
      </a>
    </div>
  );
}

export default App;
