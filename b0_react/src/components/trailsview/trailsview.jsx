import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import TrailItem from '../trailItem/trailItem';

import './trailsview.css';

const TrailsView = () => (
   <Query query={BEGINNER_TRAILS}>
      {({data, loading, error}) => {
         if (loading) return <div>Loading</div>
         if (error) return <div>Error</div>

         console.log(data);

         return (
            <div className="trailsView">
               {/* <div className="outerSection leftSection"></div> */}
               <TrailItem
                  trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
               >Trail</TrailItem>
               <TrailItem
                  trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
               >Trail</TrailItem>
               <TrailItem
                  trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
               >Trail</TrailItem>
               <TrailItem
                  trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
               >Trail</TrailItem>
               <TrailItem
                  trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
               >Trail</TrailItem>
               <TrailItem
                  trailID={data.beginnerTrails[0].id}
                  trailName={data.beginnerTrails[0].name}
                  trailProp={data.beginnerTrails[0].prop}
                  trailDistance={data.beginnerTrails[0].distance}
                  trailAltChange={data.beginnerTrails[0].altitudeChange}
                  trailAvgDiff={data.beginnerTrails[0].avgDifficulty}
                  trailAvgEnj={data.beginnerTrails[0].avgEnjoyability}
               >Trail</TrailItem>
               {/* <div className="outerSection rightSection"></div> */}
            </div>
         )
      }}
   </Query>
)

const BEGINNER_TRAILS = gql`
   {
      beginnerTrails {
         id 
         name 
         prop 
         distance 
         altitudeChange
         avgDifficulty
         avgEnjoyability
      }
   }
`

export default TrailsView;