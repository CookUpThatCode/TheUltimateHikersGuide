import React from 'react';

import './trailItem.css';

const TrailItem = (props) => (
   <div className="trailItem">
      <div className="trailInfo">
         <div className="info-name">{props.trailName}</div>
         <div className="info-prop">{props.trailProp}</div>
         <div className="info-diff">Diff: </div>
         <div className="info-diffVal">{props.trailAvgDiff.toFixed(1)}</div>
         <div className="info-enj">Enjy: </div>
         <div className="info-enjVal">{props.trailAvgEnj.toFixed(1)}</div>
         <div className="info-dist">Dist: </div>
         <div className="info-distVal">{props.trailDistance}</div>
         <div className="info-alt">Alt&#916;: </div>
         <div className="info-altVal">{props.trailAltChange}</div>



         {/* trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
 */}





         {/* <div className="info-prop">{props.trailAvgDiff.toFixed(1)}</div>
         <div className="info-3"></div> */}
      </div>
   </div>
)

export default TrailItem;