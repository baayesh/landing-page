import React from "react";
import "./QR.css";
import rImage from "../Assets/R.png";
import qrImage from "../Assets/qr.png";

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
            <img src={rImage} alt="" className="topimg" />
          </div>
          <div class="frame">
            <img src={rImage} alt="" className="topimg" />
          </div>
          <div class="frame">
            <img src={rImage} alt="" className="topimg" />
          </div>
        </div>

        <div class="bottom-row">
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
          </div>
          <div class="pane">
            <img src={rImage} alt="" className="bottomimg" />
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
