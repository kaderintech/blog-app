import React from "react";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content wrapper">
        <div className="footer-left ">
          <p>Designed & Developed by 
            XP DESIGN
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-icon">
            <img src="/facebook.svg"/>
            <p>29</p>
          </div>
          <div className="footer-icon">
            <img src="/twitter.svg" />
            <p>29</p>
          </div>
          <div className="footer-icon">
            <img src="/instagram.svg" />
            <p>40K</p>
          </div>
          <div className="footer-icon">
            <img src="/pinterest.svg" />
            <p>13K</p>
          </div>
          <div className="footer-icon">
            <img src="/youtube.svg" />
            <p>168K</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
