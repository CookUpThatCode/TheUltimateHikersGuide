import React from 'react';

import './trailSearchResult.css';

const TrailSearchResult = (props) => (
   <div className="result">
      <div className="line1">{props.name}:&nbsp;
         <div className="line1B">{props.property}</div>
      </div>
      <div className="line2">{props.city}, {props.state}</div>
   </div>
)

export default TrailSearchResult;