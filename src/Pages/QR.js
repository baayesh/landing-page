import React from "react";
import "./QR.css";
import qrImage from "../Assets/qr.png";
import Back from "../Assets/Coorperate Print.png";
import insta from "../Assets/QR/Instagram.png";
import fb from "../Assets/QR/Facebook.png";
import youtube from "../Assets/QR/Youtube.png";
import tiktok from "../Assets/QR/tiktok.png";
import ltfb from "../Assets/QR/Lower Thirds/fb.png";
import ltin from "../Assets/QR/Lower Thirds/In.png";
import ltyt from "../Assets/QR/Lower Thirds/yt.png";
import lttik from "../Assets/QR/Lower Thirds/tiktok.png";

function QR() {
  return (
    <div>
      <div className="bluePane">
        <h2 className="sidecontent">WE ARE LIVE NOW!</h2>
      </div>
      <img src={Back} alt="" className="backimg" />
      {/* Replace Contetnt */}
      <div class="content">
        <h2 className="tit">FIND US ON</h2>
        <div class="row">
          <div class="column">
            <img src={fb} alt="" />
          </div>
          <div class="column">
            <img src={insta} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img src={ltfb} alt="" />
          </div>
          <div class="column">
            <img src={ltin} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img src={youtube} alt="" />
          </div>
          <div class="column">
            <img src={tiktok} alt="" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img src={ltyt} alt="" />
          </div>
          <div class="column">
            <img src={lttik} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QR;
