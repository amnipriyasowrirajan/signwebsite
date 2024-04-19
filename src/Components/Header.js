import React from "react";
// import { Link } from "react-router-dom";
import ContactsIcon from "@mui/icons-material/Contacts";
import { MdReviews } from "react-icons/md";
import { FaSignature } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark px-3">
        <div className="container-fluid">
          {/* <Link to="/" className="navbar-brand" aria-label="Home">
            Sign Company
          </Link> */}
          <a
            className="navbar-brand"
            href="javascript:void(0)"
            aria-label="Home"
          >
            <FaSignature className="icons-sign" /> Sign Company
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
                <a className="nav-link" href="javascript:void(0)">
                  Outdoor Signs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Decals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Custom Signs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  Sign Repair
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <MdReviews className="icons" /> Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">
                  <ContactsIcon className="icons-contact" />
                  Contact Us
                </a>
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
