import React from "react";
import "./QR.css";
import qrImage from "../Assets/qr.png";
import YMCA from "../Assets/Partners/Partners/Batticaloa/YMCA Logo.jpg";
import DFCDF from "../Assets/Partners/Partners/Hambantota/DFCDF Logo.jpg";
import DCHam from "../Assets/Partners/Partners/Hambantota/LOGO DC Ham.jpg";
import WDF from "../Assets/Partners/Partners/Hambantota/Logo WDF.jpg";
import BAY from "../Assets/Partners/Partners/Kilinochchi/BAY.Org.jpeg";
import MSWF from "../Assets/Partners/Partners/Kilinochchi/MSWF.jpg";
import NGOC from "../Assets/Partners/Partners/Kilinochchi/NGO Consortium.png";
import SLCDF from "../Assets/SLCDF.png";
import DWC from "../Assets/DWC.png";
import Canada from "../Assets/Canada.png";
import Back from "../Assets/Coorperate Print.png";

function QR() {
  return (
    <div>
      <div className="bluePane">
        <h2 className="sidecontent">
          WE ARE LIVE NOW! <br />
          <h2 className="reachus">REACH US; </h2>
        </h2>
      </div>
      <img src={Back} alt="" className="backimg" />
      {/* Replace Contetnt */}
      <div class="content">
   


        <h2 className="tit">Look at our SOCIAL MEDIA</h2>
        <div class="row">
          <div class="column">
            <img src={qrImage} alt="" />
          </div>
          <div class="column">
            <img src={qrImage} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <h3 className="fb">Facebook</h3>
          </div>
          <div class="column">
            <h3 className="insta">Instagram</h3>
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img src={qrImage} alt="" />
          </div>
          <div class="column">
            <img src={qrImage} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <h3 className="fb">Youtube</h3>
          </div>
          <div class="column">
            <h3 className="insta">LinkedIn</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QR;
