import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = (props) => {
   let home = "";
   let about = "";
   let contact = "";
   let loginReg = "";
   let profile = "";
   if (props.currentPg == "home") home = "currentPg";
   else if (props.currentPg == "about") about += "currentPg";
   else if (props.currentPg == "contact") contact += "currentPg";
   else if (props.currentPg == "loginReg") loginReg += "currentPg";
   else if (props.currentPg == "profile") profile += "currentPg";

   let mypath = "/traildetail/3";

   return (
      <div className="header">
         <div className="leftItem"><div className="homeBox"><Link to="/"><div className={home}>Home</div></Link></div></div>
         <div className="rightItems"><div className="itemBox"><div className={about}>About</div></div></div>
         <div className="rightItems"><div className="itemBox"><div className={contact}>Contact</div></div></div>
         <div className="rightItems"><div className="loginRegBox"><Link to="/auth"><div className={loginReg}>Login / Register</div></Link></div></div>
         <div className="rightItems"><div className="itemBox"><div className={profile}>Profile</div></div></div>
      </div>
   )
}

export default Header;