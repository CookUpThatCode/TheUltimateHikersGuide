import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import './profile.css';

const Profile = () => {

   return (
      <div>

         <Query query={HIKER_QUERY}>
            {({data, loading, error}) => {
               if (error) return <div>Error</div>
               if (loading) return <div></div>

               console.log(data)

               return (
                  <div>Logged In. ID: {data.hiker.id} username: {data.hiker.user.username}</div>
               )
            }}
         </Query>

      </div>
      
   )
}

const HIKER_QUERY = gql`
   query {
      hiker {
         id 
         user {
            username
         }
      }
   }
`

export default Profile;

// const IS_LOGGED_IN_QUERY = gql`
//    {
//       isLoggedIn @client
//    }
// `

// const HIKER_QUERY = gql`
//    query ($hikerID: Int!) {
//       hiker(hikerID: $hikerID) {
//          id 
//          user {
//             username
//          }
//       }
//    }
// `

{/* <Query query={HIKER_QUERY} variables={{hikerID:hikerID}}>
   {({data, loading, error}) => {
      if (error) return <div>Error</div>
      if (loading) return <div></div>

      console.log(data)

      return (
         <div>Logged In. ID: {data.hiker.id} username: {data.hiker.user.username}</div>
      )
   }}
</Query> */}

{/* <Query query={IS_LOGGED_IN_QUERY}>
   {({data}) => data.isLoggedIn ? <div>You're logged in</div> : <div>Not logged in</div>}
</Query> */}