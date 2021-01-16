import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import TrailItem from '../trailItem/trailItem';

import './trailsview.css';

class TrailsView extends Component {
   state = {
      startIdx: 0,
      list: null
   }

   rightHandler = () => {
      if (this.state.startIdx !== 10) {
         this.setState((prevState, prevProps) => {
            return {
               startIdx: prevState.startIdx + 5
            }
         })
      }
   }

   leftHandler = () => {
      if (this.state.startIdx !== 0) {
         this.setState((prevState, prevProps) => {
            return {
               startIdx: prevState.startIdx - 5
            }
         })
      }
   }

   render() {
      let query = null;
      if (this.props.list === "beginner") {
         query = BEGINNER_TRAILS;
      }
      else if (this.props.list === "popular") {
         query = POPULAR_TRAILS;
      }
      let leftArrow = "outerSection";
      let rightArrow = "outerSection";
      if (this.state.startIdx === 0) leftArrow += " grayedOut";
      if (this.state.startIdx === 10) rightArrow += " grayedOut";
      let list = null;
      if (!this.state.list) {
         list = (
            <Query query={query}>
               {({data, loading, error}) => {
                  if (loading) return <div></div>
                  if (error) return <div>Error</div>
                  if (this.props.list === "beginner") {
                     this.setState({list: data.beginnerTrails});
                  }
                  else if (this.props.list === "popular") {
                     this.setState({list: data.popularTrails});
                  }

                  return <div></div>
               }}
            </Query>
         )
      }
      else {
         // let trailsSlice = this.state.list.slice(this.state.startIdx, this.state.startIdx+5)
         // let trailsList = trailsSlice.map((trail, idx) => {
         let trailsList = this.state.list.map((trail, idx) => {
            return <TrailItem
               key={idx}
               trailID={trail.id}
               trailName={trail.name}
               trailProp={trail.prop}
               trailDistance={trail.distance}
               trailAltChange={trail.altitudeChange}
               trailAvgDiff={trail.avgDifficulty}
               trailAvgEnj={trail.avgEnjoyability}
               imageUrl={trail.image}
            />
         })
         list = (
            <div className="trailsView">
               {trailsList}
            </div>
         )
      }
      return (
         list
      )
   }
}


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
         image
      }
   }
`

const POPULAR_TRAILS = gql`
   {
      popularTrails {
         id 
         name 
         prop 
         distance 
         altitudeChange
         avgDifficulty
         avgEnjoyability
         image
      }
   }
`

export default TrailsView;