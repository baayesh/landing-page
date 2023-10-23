import Video from "./Assets/Video.mp4";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import Congratz from "./Pages/Congratz";
import qr from "./Pages/QR";

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate("/Congratz");

   
    setTimeout(() => {
      
      navigate("/qr");
    }, 11000);
  };
  return (
    <div className="App">
      <video className="Vid" autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="tagwrap">
        <h1 className="tag">Break the Silence - End the Violence</h1>
      </div>
      <button onClick={handleButtonClick} className="button" id="button-3">Launch the Social Media</button>
    </div>
  );
}

export default App;
