import React from "react";
import { NavLink } from "react-router-dom";

import showjoBrand from "../imgs/ShowJo-Brand.png"
import jjkCoverImg from "../imgs/jjk-cover-img.jpg"

import "./landingPage.css"

const LandingPage = () => {
     const hotAnimeTitles = ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5']; // replace with fetched data
     const topLists = ['List 1', 'List 2', 'List 3', 'List 4', 'List 5'] //replace with fetched data

     return (
          <div className="main-landing-container">

               <div className="landing-container">
                    <div className="top-landing-header">
                         <img
                         loading="lazy"
                         decoding="async"
                         srcSet={showjoBrand}
                         alt="ShowJo Brand"
                         aria-hidden="true"
                         className="top-left-image"
                         />
                         <div className="buttons-container">
                              <NavLink className="button" to="/login">SIGN IN</NavLink>
                              <NavLink className="button" to="/create-profile">CREATE ACCOUNT</NavLink>
                              <NavLink className="button" to="/anime">ANIME</NavLink>
                              <NavLink className="button" to="/lists">LISTS</NavLink>
                              <input type="text" placeholder="Search..." className="search-bar" />
                         </div>
                    </div>
               </div>

               <div className="summary-landing-container">
                    <img
                    loading="lazy"
                    decoding="async"
                    srcSet={jjkCoverImg}
                    alt="Jujustu Kaisen"
                    aria-hidden="true"
                    className="cover-image"
                    />
                    <div className="summary-container">
                         <h2>Rate, log, and connect with friends over anime!</h2>
                         <NavLink className="summary-btn" to="/create-profile">Create your free account now!</NavLink>
                    </div>
               </div>

               <div className="info-landing-container">
                    <div className="top-anime-landing-container">
                         <h2>Hot Anime Right Now</h2>
                         <ul>
                              {hotAnimeTitles.map((title, index) => (
                                   <li key={index}>{title}</li>
                              ))}
                         </ul>
                    </div>
                    <div className="top-lists-landing-container">
                         <h2>Top Lists on ShowJo</h2>
                         <ul>
                              {topLists.map((list, index) => (
                                   <li key={index}>{list}</li>
                              ))}
                         </ul>
                    </div>
               </div>
          </div>
     )
}

export default LandingPage;