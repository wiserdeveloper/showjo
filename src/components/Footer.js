import React from "react";
import { NavLink } from "react-router-dom";

import './footer.css'

const Footer = () => {
     return (
          <div className="footer-container">
               <div className="main-footer-info">
                    <NavLink className="main-footer-btn" to="about">About</NavLink>
                    <NavLink className="main-footer-btn" to="help">Help</NavLink>
                    <NavLink className="main-footer-btn" to="terms">Terms</NavLink>
                    <NavLink className="main-footer-btn" to="contact">Contact</NavLink>
                    <NavLink className="main-footer-btn" to="api">API</NavLink>
                    <NavLink className="main-footer-btn" to="INSERT_SOCIAL">X</NavLink>
                    <NavLink className="main-footer-btn" to="INSERT_SOCIAL">Threads</NavLink>
                    <NavLink className="main-footer-btn" to="INSERT_SOCIAL">Facebook</NavLink>
                    <NavLink className="main-footer-btn" to="INSERT_SOCIAL">Instagram</NavLink>
                    <NavLink className="main-footer-btn" to="INSERT_SOCIAL">TikTok</NavLink>
               </div>
               <div className="liscense-info">
                    <p>© ShowJo Social. Made by Alyssa Wiser in The United States. Anime data from INSERT API.</p>
               </div>
          </div>
     )
}

export default Footer;