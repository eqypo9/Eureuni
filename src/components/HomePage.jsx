import React from "react";
import UserBar from "../FriendBar/friend";
import Sidebar from "../Navigation/sidebar";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidebar />
      </div>
      <div className="homepage__fri">
        <UserBar />
      </div>
    </div>
  );
}

export default HomePage;
