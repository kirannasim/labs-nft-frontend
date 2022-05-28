import React from "react";
import { Link } from "react-router-dom";
import logoImgage from "../../assets/images/logo.png";
import "../../assets/scss/home/topbar.scss";
import { FiMenu } from "react-icons/fi";
const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src={logoImgage} alt="Logo Image" />
        </a>

        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="icon">
            <FiMenu />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nodes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Join Discord
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login">
              <button
                type="button"
                className="btn btn-outline-primary topbar--btn"
              >
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button type="button" className="btn btn-primary topbar--btn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
