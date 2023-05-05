import React from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3> CentreMine</h3>

        <p className="footer-links">
          <p>home page  </p> <br />
          <p>The University</p> <br />
          <p>Central Administration</p>
        </p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fo-phone"></i>
          <p>961 784873</p>
        </div>
        <div>
          <i className="fo-envelope"></i>
          <p>
            
            <a href="">jad@gmail.com</a>
          </p>
        </div>
        <div className="fo-button">
          <p>
            <a href="/contactUs">
              <button>get in touch</button>
            </a>
          </p>
        </div>
        <div className="footer-center-right">
          <p>Faculties & Institutes</p>
          <br /> <br /> <br />
          <p>Specializations</p>
          <br /> <br /> <br />
          <p>Admissions</p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>
            scientific research <br /> <br />
            teaching stuff
           </span>
        </p>

        <div>
          <br /> follow us on <br /> <br />
          <a href="#"> 
            {/* facebook links */}
            <i className="link-facebook">
              
              <FacebookIcon />
            </i>
          </a>
          <a href="#">
            {/* instagram links */}
            <i class="link-instagram">
              
              <InstagramIcon />
            </i>
          </a>
          <a href="#">
            {/* linkedin links */}
            <i class="link-linkedin">
              
              <LinkedInIcon />
            </i>
          </a>
          <a href="#">
            {/* twitter links */}
            <i class="link-twitter">
              
              <TwitterIcon />
            </i>
          </a>
          <a href="#">
            {/* youtube links */}
            <i class="link-youtube">
              
              <YouTubeIcon /> 
            </i>
          </a>
          <a href="#">
            {/* wtsap links */}
            <i class="link-wtsap">
              
              <WhatsAppIcon />
            </i>
          </a>
        </div>
      </div>
      
    </footer>
  );
}
