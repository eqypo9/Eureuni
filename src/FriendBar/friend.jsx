import React, { Component } from "react";
import { styled } from "styled-components";
import User from "../components/user";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  visitProfile = (e) => {
    //API
  };

  render() {
    return <User onClick={this.visitProfile} />;
  }
}

export default function UserBar() {
  return (
    <div>
      <UserProfile />
      <UserProfile />
    </div>
  );
}
