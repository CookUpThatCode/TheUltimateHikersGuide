import React, { Component } from 'react';

import './trailItem.css';

class TrailItem extends Component {
   render() {
      let imageUrl = 'http://localhost:8000/media/' + this.props.imageUrl;
      let nullAvg = 3.0
      
      return (
         <div className="trailItem" style={{backgroundImage: `url(${imageUrl})`, backgroundSize: `cover`}}>
            <div className="trailInfo">
               <div className="info-name">{this.props.trailName}</div>
               <div className="info-prop">{this.props.trailProp}</div>
               <div className="info-diff">Diff: </div>
               <div className="info-diffVal">{this.props.trailAvgDiff ? this.props.trailAvgDiff.toFixed(1) : nullAvg.toFixed(1)}</div>
               <div className="info-enj">Enjy: </div>
               <div className="info-enjVal">{this.props.trailAvgEnj ? this.props.trailAvgEnj.toFixed(1) : nullAvg.toFixed(1)}</div>
               <div className="info-dist">Dist: </div>
               <div className="info-distVal">{this.props.trailDistance.toFixed(1)}</div>
               <div className="info-alt">Alt&#916;: </div>
               <div className="info-altVal">{this.props.trailAltChange}</div>
            </div>
            {/* <img src={myImg} className="bgImage" /> */}
         </div>
      )
   }
}

export default TrailItem;