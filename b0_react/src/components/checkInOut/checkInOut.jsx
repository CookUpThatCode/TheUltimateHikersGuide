import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import './checkInOut.css';

const CheckInOut = (props) => {
   const { 
      trailID, checkInEnabled, checkOutEnabled, checkInClass, checkOutClass, checkStatusText1, checkStatusText2, 
      details, openStatus, checkInHandler, checkOutHandler, refetch
   } = props;

   // const checkInHandler = async (checkIn) => {
   //    if (checkInEnabled) {
   //       const res = await checkIn();
   //       console.log(res);
   //    }
   // } 

   // const checkOutHandler = async (checkOut) => {
   //    if (checkOutEnabled) {
   //       const res = await checkOut();
   //       console.log(res);
   //    }
   // }

   return (
      <div className="topDetailsContainer">
         <div className="namePropBox">
            <div className="nmPropLn1">{details.name}</div>
            <div className="nmPropLn2">{details.prop}</div>
         </div>
         <div className="labelsBox">
            <div className="labelItem">Status:</div>
            <div className="labelItem">Fee:</div>
         </div>
         <div className="openFeeBox">
            <div className={openStatus}>{details.isOpen ? 'OPEN' : 'CLOSED'}</div>
            <div className="openFeeItem">{details.fee===0 ? 'FREE' : `$${details.fee.toFixed(2)}`}</div>
         </div>
         <div className="smallSpace"></div>
         <Mutation mutation={CHECK_IN_MUTATION} variables={{trailID: trailID}}>
            {(checkIn, { loading, error }) => {
               if (error) return <div>Error</div>
               return (
                  <div className={checkInClass} onClick={() => checkInHandler(checkIn, refetch)}>CHECK IN</div>
               )
            }}
         </Mutation>
         <Mutation mutation={CHECK_OUT_MUTATION} variables={{trailID: trailID}}>
            {(checkOut, { loading, error }) => {
               if (error) return <div>CheckOutError</div>
               return (
                  <div className={checkOutClass} onClick={() => checkOutHandler(checkOut, refetch)}>CHECK OUT</div>
               )
            }}
         </Mutation>
         <div className="topDetailsSpace"><div className="checkInOutStatus">
            <div>{checkStatusText1}</div><div>{checkStatusText2}</div>
         </div></div>
      </div>
   )
}

// const CHECK_IN_MUTATION = gql`
//    mutation ($trailID: Int!) {
//       checkIn(trailID: $trailID) {
//          hike {
//             id
//          }
//       }
//    }
// `

// const CHECK_OUT_MUTATION = gql`
//    mutation ($trailID: Int!) {
//       checkOut(trailID: $trailID) {
//          hike {
//             id
//          }
//       }
//    }
// `

export default CheckInOut;