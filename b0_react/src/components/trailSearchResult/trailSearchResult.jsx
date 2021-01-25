import React from 'react';
import { Link } from 'react-router-dom';

import './trailSearchResult.css';

const TrailSearchResult = (props) => (
   <Link to={`/traildetail/${props.trailID}`}><div className="result">
      <div className="line1">{props.name}:&nbsp;
         <div className="line1B">{props.property}</div>
      </div>
      <div className="line2">{props.city}, {props.state}</div>
   </div></Link>
)

export default TrailSearchResult;
