import React from 'react';
import TrailSearchResult from '../trailSearchResult/trailSearchResult';

import './trailSearchResultsList.css';

const TrailSearchResultsList = (props) => {
   let results = props.results.map((trail, idx) => {
      return <TrailSearchResult className="trailsListContainer"
         key={idx}
         name={trail.name}
         property={trail.prop}
         city={trail.city}
         state={trail.state}
         trailID={trail.id}
      />
   })

   return (
      <div className="trailsListContainer">
         <div className="trailsListSpace"></div>
         <div className="trailsList">
            <div className="listBox">
               {results}
               {props.resultIdx !==0 && <div className="upArrow" onClick={props.prevResults}>&uarr;</div>}
               {props.resultIdx+8 < props.numResults && <div className="downArrow" onClick={props.nextResults}>&darr;</div>}
            </div>
         </div>
      </div>
   )
}

export default TrailSearchResultsList;