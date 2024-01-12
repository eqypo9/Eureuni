import React from "react";
import "./sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ChecklistIcon from "@mui/icons-material/Checklist";

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon />
          <span>검색</span>
        </button>

        <div className="sidenav__middle">
          <button className="sidenav__button">
            <NoteAltIcon />
            <span>Goals</span>
          </button>

          <button className="sidenav__button">
            <ChecklistIcon />
            <span>Diary</span>
          </button>

          <button className="sidenav__button">
            <CalendarMonthIcon />
            <span>Calander</span>
          </button>
        </div>
      </div>

      <div className="sidenav__buttom">
        <button className="sidenav__button">
          <MenuIcon />
          <span>More</span>
        </button>
        <button className="sidenav__button">
          <SettingsIcon />
          <span>Settings</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
