import React from "react";

export default function footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3> CentreMine</h3>

        <p className="footer-links">
          <a href="/">Home</a>

          <a href="/events">Events</a>

          <a href="/opportunities">Opportunities</a>

          <a href="/competitions">Competitions</a>
        </p>

        <p className="footer-company-name">
          copyright <strong>CentreMine</strong>
          all rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fo-map-marker"></i>
          <p>
            <span>ghazzi abad</span>
            delhi
          </p>
        </div>
        <div>
          <i className="fo-phone"></i>
          <p>=961 784873</p>
        </div>
        <div>
          <i className="fo-envelope"></i>
          <p>
            {" "}
            <a href="">jad@gmail.com</a>
          </p>
        </div>
        <div>
            <i className="fo-button">
            <p>
                <a href="/src/pages/contactUs">get in touch</a>
            </p>    
            </i>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>about the company</span>
        </p>

        <div>
          <a href="#"> 
          {/* facebook links */}
            <i className="link-facebook"></i>
          </a>
          <a href="#">
            {/* instagram links */}
            <i class="link-instagram"></i>
          </a>
          <a href="#">
            {/* linkedin links */}
            <i class="link-linkedin"></i>
          </a>
          <a href="#">
            {/* twitter links */}
            <i class="link-twitter"></i>
          </a>
          <a href="#">
            {/* youtube links */}
            <i class="link-youtube"></i>
          </a>
          <a href="#">
            {/* wtsap links */}
            <i class="link-wtsap"></i>
          </a>
        </div>
      </div>-
    </footer>
  );
}
