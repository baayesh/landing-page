import Video from "./Assets/Video.mp4";
import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import Congratz from "./Pages/Congratz";
import qr from "./Pages/QR";
import freez from "./Assets/Freez.mp4"

function App() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    
    navigate("/Congratz");

   
    setTimeout(() => {
      
      navigate("/qr");
    }, 10500);
  };
  return (
    <div className="App">
      <video className="Vid" autoPlay muted loop>
        <source src={freez} type="video/mp4" />
      </video>
      <div className="tagwrap">
      </div>
      <button onClick={handleButtonClick} className="button" id="button-3">Launch Social Media</button>
    </div>
  );
}

export default App;
