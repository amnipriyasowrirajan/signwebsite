import React from "react";
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";
import "../Components/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark navbar-custom px-3">
        <div className="container-fluid">
          {/* <Link to="/" className="navbar-brand" aria-label="Home">
            Sign Company
          </Link> */}
          <a
            className="navbar-brand"
            href="javascript:void(0)"
            aria-label="Home"
          >
            {/* <FaSignature className="icons-sign" /> */}
            <img src="../images/logo.png" className="logoImage" alt="..." />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/channel">
                  Channel Letters
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signbox">
                  Sign Box
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/decals">
                  Decals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/indoor">
                  Indoor Signs
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/repair">
                  Sign Repair
                </Link>
              </li>

              <li className="contact">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
