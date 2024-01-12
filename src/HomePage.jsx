import React from "react";
import UserBar from "./FriendBar/friend";
import Sidebar from "./Navigation/sidebar";

function HomePage() {
  return (
    <div>
      <Sidebar />
      <UserBar />
    </div>
  );
}

export default HomePage;
