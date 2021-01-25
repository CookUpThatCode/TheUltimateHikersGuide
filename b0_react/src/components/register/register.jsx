import React, { useState } from 'react';
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';

import './register.css';

const Register = ({ setJustRegistered }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");
   const [skillLevel, setSkillLevel] = useState(1);

   const handleSubmit = async (event, createHiker) => {
      event.preventDefault();
      const res = await createHiker();
      console.log(res);
      setJustRegistered(true);
   }

   return (
      <Mutation mutation={CREATE_USER_MUTATION}
         variables={{ username:username, password:password, email:email, skillLevel:skillLevel}}
      >
         {(createHiker, { loading, error }) => {

            return (
               <form onSubmit={(event) => handleSubmit(event, createHiker)}>
                  <input type="text" placeholder="username" onChange={event => setUsername(event.target.value)}/>
                  <input type="text" placeholder="password" onChange={event => setPassword(event.target.value)}/>
                  <input type="text" placeholder="email" onChange={event => setEmail(event.target.value)}/>
                  <input type="text" value="1" />
                  <button type="submit">Register</button>
               </form>
            )
         }}
      </Mutation>
   )
}

const CREATE_USER_MUTATION = gql`
   mutation ($username:String!, $password:String!, $email:String!, $skillLevel:Int!) {
      createHiker(username:$username, password:$password, email:$email, skillLevel:$skillLevel) {
         hiker {
            user {
               id
            }
         }
      }
   }
`

export default Register;