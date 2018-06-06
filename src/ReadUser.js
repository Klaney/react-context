import UserContext from "./UserContext";
import React from "react";

export default function ReadUser(props){
  return(
    <UserContext.Consumer>
      {(user) => (
          <h1> {user.name}</h1>
      )}
    </UserContext.Consumer>
  )
}