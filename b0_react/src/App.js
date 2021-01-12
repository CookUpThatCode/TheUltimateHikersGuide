import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Query } from 'react-apollo';
import  { gql } from 'apollo-boost';

import HomePage from './pages/homepage/homepage';
import TrailDetail from './pages/traildetail/traildetail';
import TestPage from './pages/testpage/testpage';

const App = () => (
   // <div>
   //    Hello world
   // </div>
   // <Query query={CONVO_THREADS_QUERY}>
   //    {({data, loading, error}) => {
   //       if (loading) return <div>Loading</div>
   //       if (error) {
   //          console.log(error);
   //          return <div>Error</div>
   //       }

   //       console.log(data)
         
   //       return (
   //          <div>hello again: {data.conversationThreads.length}</div>
   //       )
   //    }}
   // </Query>

   <div>
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/traildetail' component={TrailDetail} />
            <Route exact path='/test' component={TestPage} />
         </Switch>
      </BrowserRouter>
   </div>
);



const CONVO_THREADS_QUERY = gql`
   {
      conversationThreads(hikerID:1) {
      hikerID {
         user {
            username
         }
      }
      recipientID {
         user {
            username
         }
      }
      timeSent 
      content
      }
   }
`


export default App;