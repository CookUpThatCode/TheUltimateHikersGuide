import React, { useState } from 'react';
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

import './login.css';

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleSubmit = async (event, tokenAuth, client) => {
      event.preventDefault();
      const res = await tokenAuth();
      console.log(res);
      localStorage.setItem('authToken', res.data.tokenAuth.token)
      client.writeData({data: {isLoggedIn: true}})
   }

   return (
      <Mutation mutation={TOKEN_AUTH_MUTATION}
         variables={{ username:username, password:password }}
      >
         {(tokenAuth, { loading, error, called, client }) => {

            return (
               <form onSubmit={(event) => handleSubmit(event, tokenAuth, client)}>
                  <input type="text" placeholder="username" onChange={event => setUsername(event.target.value)}/>
                  <input type="text" placeholder="password" onChange={event => setPassword(event.target.value)}/>
                  <button type="submit">Login</button>
               </form>
            )
         }}
      </Mutation>
   )
}

const TOKEN_AUTH_MUTATION = gql`
   mutation ($username:String!, $password:String!) {
      tokenAuth(username:$username, password:$password) {
         token
      }
   }
`

export default Login;