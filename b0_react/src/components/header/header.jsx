import React from 'react';

import './header.css';

const Header = (props) => {
   let home = "homeBox";
   let about = "itemBox";
   let contact = "itemBox";
   let loginReg = "loginRegBox";
   let profile = "itemBox";
   if (props.currentPg == "home") home += " currentPg";
   else if (props.currentPg == "about") about += " currentPg";
   else if (props.currentPg == "contact") contact += " currentPg";
   else if (props.currentPg == "loginReg") loginReg += " currentPg";
   else if (props.currentPg == "profile") profile += " currentPg";

   return (
      <div className="header">
         <div className="leftItem"><div className={home}>Home</div></div>
         <div className="rightItems"><div className={about}><div className="textBox">About</div></div></div>
         <div className="rightItems"><div className={contact}>Contact</div></div>
         <div className="rightItems"><div className={loginReg}>Login / Register</div></div>
         <div className="rightItems"><div className={profile}>Profile</div></div>
      </div>
   )
}

export default Header;