import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import "../../../js/custom.js";
const Header = () => {
  return (
    <div className="main-header">
      <nav className="navbar navbar-expand-lg navbar-light bg-main header">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="public/images/krilogo.png" alt="logo" height={90} />
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
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse col-8 toggle-menu"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="px-4 nav-item">
                <Link
                  to={"/"}
                  className="active text-darkgreen fw-normal fs-17"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="px-4 nav-item">
                <Link
                  to={"/About"}
                  className="text-darkgreen fw-normal fs-17"
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li className="px-4 nav-item">
                <Link
                  to={"/OurWork"}
                  className="text-darkgreen fw-normal fs-17"
                  aria-current="page"
                >
                  Our Work
                </Link>
              </li>
              <li className="px-4 nav-item">
                <Link
                  to={"/Services"}
                  className="text-darkgreen fw-normal fs-17"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li className="px-4 nav-item">
                <Link
                  to={"/Contact"}
                  className="text-darkgreen fw-normal fs-17"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="col-2 career  text-end">
              <button className="rounded-pill px-5 py-3 bg-red border-0 outline-none m-0 p-0">
                <Link className="text-white">Careers</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
