import React from "react";
import "../home/home.css";
import img1 from "../../assets/fp1.jpg";
import img2 from "../../assets/fp2.webp";
import img3 from "../../assets/fp3.jpeg";

export default function Home() {
  return (
    <div className="page">
      <p className="texthome"> Latest events </p>
      <div className="container">
        <div className="card">
          <div className="imgbox">
            <img src={img1} alt="img1"/>
          </div>
          <div className="content">
            <h2> card one</h2>
            <p> Open Power of Personal Finance and Budgeting </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={img2} alt="img2"/>
          </div>
          <div className="content">
            <h2> card two </h2>
            <p> Understanding your Journey with Personal Development </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbox">
            <img src={img3} alt="img3"/>
          </div>
          <div className="content">
            <h2> card three </h2>
            <p> Recycling in Lebanon (Entrepreneurship Focus) </p>
          </div>
        </div>
      </div>
      <div class="uiverse">
    <span class="tooltip"> Check more events</span>
    <span>
        More events
    </span>
</div>
    </div>
  );
}
