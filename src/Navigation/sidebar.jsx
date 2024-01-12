import React, { state } from "react";
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
      <div className="sidenav__buttons" >
        <button className="sidenav__button" >
          <HomeIcon />
          <span>홈</span>
        </button>

        <button className="sidenav__button">
          <SearchIcon />
          <span>검색</span>
        </button>

        <div className="sidenav__middle">
          <button className="sidenav__button">
            <ChecklistIcon />
            <span>다짐</span>
          </button>

          <button className="sidenav__button">
            <NoteAltIcon />
            <span>일기</span>
          </button>

          <button className="sidenav__button">
            <CalendarMonthIcon />
            <span>캘린더</span>
          </button>
        </div>
      </div>

      <div className="sidenav__buttom">
        <button className="sidenav__button">
          <MenuIcon />
          <span>더보기</span>
        </button>
        <button className="sidenav__button">
          <SettingsIcon />
          <span>설정</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
