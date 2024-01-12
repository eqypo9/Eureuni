import React, { Component } from "react";
import { styled } from "styled-components";
import User from "../components/user";
import "./friend.css";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  visitProfile = (e) => {
    //API
  };

  render() {
    return (
      <div className="friendBar">
        <User onClick={this.visitProfile} />
        <User onClick={this.visitProfile} />
        <User onClick={this.visitProfile} />
      </div>
    );
  }
}

export default function UserBar() {
  return (
    <div>
      <UserProfile />
    </div>
  );
}
