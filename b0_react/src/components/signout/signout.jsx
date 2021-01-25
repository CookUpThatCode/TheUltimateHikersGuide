import React from 'react';
import { ApolloConsumer } from 'react-apollo'

import './signout.css';

const Signout = () => {
   
   const handleSignout = (client) => {
      localStorage.removeItem('authToken')
      client.writeData({data: {isLoggedIn: false}})
      console.log('Signed out user', client)
   }

   return (
      <ApolloConsumer>
         {client => (
            <div className="signOut" onClick={() => handleSignout(client)}>Sign Out</div>
         )}
      </ApolloConsumer>
   )
}

export default Signout;