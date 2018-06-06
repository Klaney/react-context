import UserContext from "./UserContext";
import React from "react";
import UserToggle from "./UserToggle";
import ReadUser from "./ReadUser";

export default class ChangeUser extends React.Component{
  constructor(props) {
    super(props);

    this.changeUser = () => {
      this.setState(state => ({
        name: state.name === "nologgedin"? "loggedin" : "nologgedin",
      }));
    };

    this.state = {
      name: "nologgedin",
      changeUser: this.changeUser
    }
  }
  
  render() {
    return(
      <UserContext.Provider value={this.state}>
        <UserToggle/>
        <ReadUser/>
      </UserContext.Provider>
    )
  }

}