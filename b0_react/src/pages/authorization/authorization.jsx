import React, { useState } from 'react';
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

import Register from '../../components/register/register';
import Login from '../../components/login/login';
import Signout from '../../components/signout/signout';

import './authorization.css';

const Authorization = () => {
   const [justRegistered, setJustRegistered] = useState(false);

   return (
      <div>
         {/* {justRegistered
         ? <Login />
         : <Register setJustRegistered={setJustRegistered} />
         } */}
         <Login />
         <Signout />
      </div>
   )
}

export default Authorization;