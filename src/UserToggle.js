import UserContext from './UserContext';
import React from "react";


export default function userTogglerButton() {
  // The user Toggler Button receives not only the user
  // but also a toggleuser function from the context
  return (
    <UserContext.Consumer>
      {({user, changeUser}) => (
        <button
          onClick={changeUser}>
          Toggle user
        </button>
      )}
    </UserContext.Consumer>
  );
}