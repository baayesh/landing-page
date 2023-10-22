import React from "react";
import "./QR.css";
import rImage from "../Assets/R.png";
import qrImage from "../Assets/qr.png";
import YMCA from "../Assets/Partners/Partners/Batticaloa/YMCA Logo.jpg";
import DFCDF from "../Assets/Partners/Partners/Hambantota/DFCDF Logo.jpg";
import DCHam from "../Assets/Partners/Partners/Hambantota/LOGO DC Ham.jpg";
import WDF from "../Assets/Partners/Partners/Hambantota/Logo WDF.jpg";
import BAY from "../Assets/Partners/Partners/Kilinochchi/BAY.Org.jpeg";
import MSWF from "../Assets/Partners/Partners/Kilinochchi/MSWF.jpg";
import NGOC from "../Assets/Partners/Partners/Kilinochchi/NGO Consortium.png";
import SLCDF from "../Assets/SLCDF.png"
import DWC from "../Assets/DWC.png";
import Canada from "../Assets/Canada.png";

function QR() {
  return (
    <div>
      <div className="bluePane">
        <h2 className="sidecontent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </h2>
      </div>
      <div class="content">
        <div class="top-row">
          <div class="frame">
            <img src={SLCDF} alt="" className="topimg" />
          </div>
          <div class="frame">
            <img src={DWC} alt="" className="topimg" />
          </div>
          <div class="frame">
            <img src={Canada} alt="" className="topimg" />
          </div>
        </div>

        <div class="bottom-row">
          <div class="pane">
            <img src={YMCA} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={DFCDF} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={DCHam} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={WDF} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={BAY} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={MSWF} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={NGOC} alt="" className="bottomimg" />
          </div>
        </div>
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
