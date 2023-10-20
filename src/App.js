import Video from "./Assets/Video.mp4";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video className="Vid" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div class="wrap">
        <h1>Squishy-ish Button</h1>
        <input class="btn" type="button" />
      </div>
    </div>
  );
}

export default App;
