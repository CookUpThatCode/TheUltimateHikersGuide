import React, { Component } from 'react';

import './trailItem.css';

import myImg from '../../images/pexels-photo-1578750.jpeg';

class TrailItem extends Component {
   render() {
      let mypath = 'http://localhost:3000/src/images/pexels-photo-1578750.jpeg';
      let imageUrl = 'https://i.ibb.co/cvpntL1/hats.png';
      return (
         <div className="trailItem" style={{backgroundImage: `url(${imageUrl})`}}>
            <div className="trailInfo">
               <div className="info-name">{this.props.trailName}</div>
               <div className="info-prop">{this.props.trailProp}</div>
               <div className="info-diff">Diff: </div>
               <div className="info-diffVal">{this.props.trailAvgDiff.toFixed(1)}</div>
               <div className="info-enj">Enjy: </div>
               <div className="info-enjVal">{this.props.trailAvgEnj.toFixed(1)}</div>
               <div className="info-dist">Dist: </div>
               <div className="info-distVal">{this.props.trailDistance}</div>
               <div className="info-alt">Alt&#916;: </div>
               <div className="info-altVal">{this.props.trailAltChange}</div>
            </div>
            {/* <img src={myImg} className="bgImage" /> */}
         </div>
      )
   }
}

export default TrailItem;