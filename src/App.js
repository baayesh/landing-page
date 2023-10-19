import Video from "./Assets/Video.mp4";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <video autoPlay muted>
        <source src={Video} type="video/mp4"/>
      </video>
    </div>
  );
}

export default App;
