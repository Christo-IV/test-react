import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/IT-kool_No_Background.svg";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <nav className="navbar top flex f-row">
        <ul className="nav-links flex f-row">
          <li className="nav-link">
            <a
              href="https://www.facebook.com/tartuvoco/"
              className="img-link fa fa-facebook"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
          <li className="nav-link">
            <a
              href="https://www.tiktok.com/@tartuvoco"
              className="img-link fa-brands fa-tiktok"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
          <li className="nav-link">
            <a
              href="https://www.instagram.com/tartuvoco/"
              className="img-link fa fa-instagram"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
        </ul>
        <ul className="nav-links flex f-row">
          <li className="nav-link">
            <a href="https://voco.ee/kontakt/" target="_blank" rel="noreferrer">
              Kontakt
            </a>
          </li>
          <li className="nav-link">
            <a href="#">Tunniplaan</a>
          </li>
          <li className="nav-link">
            <a
              href="https://siseveeb.voco.ee/"
              target="_blank"
              rel="noreferrer"
            >
              Siseveeb
            </a>
          </li>
        </ul>
      </nav>
      <nav className="navbar bottom flex f-row">
        <ul className="nav-links flex f-row">
          <li className="nav-link">
            <a href="#">Sisseastumine</a>
          </li>
          <li className="nav-link">
            <a href="#itPaths">Erialad</a>
          </li>
          <li className="nav-link">
            <a href="#">Uudised</a>
          </li>
        </ul>
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="Tartu Rakendusliku Kolledži logo"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
