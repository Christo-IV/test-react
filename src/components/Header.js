import React from "react";
import logo from "../img/IT-kool_No_Background.svg";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar top flex f-row">
        <ul className="nav-imgs flex f-row">
          <li className="nav-img">
            <a>
              <span className="fa fa-facebook"></span>
            </a>
          </li>
          <li className="nav-img">
            <span className="fa-brands fa-tiktok"></span>
          </li>
          <li className="nav-img">
            <span className="fa fa-instagram"></span>
          </li>
        </ul>
        <ul className="nav-links flex f-row">
          <li className="nav-link">
            <a href="#">Kontakt</a>
          </li>
          <li className="nav-link">
            <a href="#">Tunniplaan</a>
          </li>
          <li className="nav-link">
            <a href="#">Siseveeb</a>
          </li>
        </ul>
      </nav>
      <nav className="navbar bottom flex f-row">
        <ul className="nav-links flex f-row">
          <li className="nav-link">
            <a href="#">Sisseastumine</a>
          </li>
          <li className="nav-link">
            <a href="#">Erialad</a>
          </li>
          <li className="nav-link">
            <a href="#">Uudised</a>
          </li>
        </ul>
        <img className="logo" src={logo} />
      </nav>
    </header>
  );
}

export default Header;
