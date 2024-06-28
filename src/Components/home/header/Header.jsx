import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="py-4 px-5">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="col-3">
            <div className="logo">
              <img src="public/images/logo.png" alt="logo" height={90} />
            </div>
          </div>
          <div className="col-6">
            <ul className="p-0 m-0 d-flex flex-wrap justify-content-center">
              <li className="px-3 text-center">
                <Link to={"/"} className="text-white fw-normal">
                  Home
                </Link>
              </li>
              <li className="px-3 text-center">
                <Link to={"/"} className="text-white fw-normal">
                  About Us
                </Link>
              </li>
              <li className="px-3 text-center">
                <Link to={"/"} className="text-white fw-normal">
                  Our Work
                </Link>
              </li>
              <li className="px-3 text-center">
                <Link to={"/"} className="text-white fw-normal">
                  Services
                </Link>
              </li>
              <li className="px-3 text-center">
                <Link to={"/"} className="text-white fw-normal">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 text-end">
            <button className="rounded-pill px-5 py-3 bg-blue border-0 outline-none m-0 p-0">
              <Link className="text-white">Careers</Link>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
