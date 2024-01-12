import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Sidebar() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt=""
      ></img>
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>

        <button className="sidenav__button">
          <CalendarMonthIcon />
          <span>Calander</span>
        </button>
      </div>

      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
