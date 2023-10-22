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
      <Link to="/Congratz" class="button" id="button-3"> Click Here</Link>
    </div>
  );
}

export default App;
