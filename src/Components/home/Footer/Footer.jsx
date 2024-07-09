import React from "react";
import "../Footer/Footer.css";
import { IoIosMail } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="pt-100 pb-3">
        <div className="container border-bottom border-1 border-secondary pb-5">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center py-3">
              <p className="m-0 p-0 w-100 d-flex flex-wrap align-items-center">
                <img src="public/images/krilogo.png" alt="logo" height={58} />
                <span className="text-uppercase text-darkgreen fs-4">
                  kriyona tech
                  <span className="text-green fs-14 pt-2 fst-italic d-block">
                    where future begins
                  </span>
                </span>
              </p>
              <p className="text-secondary text-start fs-17 d-inline-block pt-4">
                ATHH TECHNOLOGIES LLP Is A Creative Digital Agency Based In
                India. We Are Composed Of Creative Designers And Experienced
                Developers.
              </p>
              <ul className="m-0 p-0 d-flex flex-wrap">
                <li className="mx-2 bg-transparent rounded-circle hw-50">
                  <a href="#" className="text-darkgreen fs-4">
                    <IoIosMail />
                  </a>
                </li>
                <li className="mx-2 bg-transparent rounded-circle hw-50">
                  <a href="#" className="text-darkgreen fs-4">
                    <FaInstagram />
                  </a>
                </li>
                <li className="mx-2 bg-transparent rounded-circle hw-50">
                  <a href="#" className="text-darkgreen fs-4">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="mx-2 bg-transparent rounded-circle hw-50">
                  <a href="#" className="text-darkgreen fs-4">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-2 text-start py-3">
              <h6 className="text-darkgreen text-capitalize fs-5 text-center font-goodtime">
                Hepful links
              </h6>
              <ul className="m-0 p-0 text-center">
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    About Us
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    Our Work
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    Services
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-2 py-3">
              <h6 className="text-darkgreen text-capitalize fs-5 text-center font-goodtime">
                services
              </h6>
              <ul className="m-0 p-0 text-center">
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    App development
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    Blockchain
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    Game development
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-secondary fs-17">
                    UI / UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-2 py-3">
              <h6 className="text-darkgreen text-capitalize fs-5 text-center font-goodtime">
                Contact Us
              </h6>
              <ul className="m-0 p-0 text-center">
                <li className="py-2">
                  <a href="#" className="text-darkgreen fs-17">
                    <IoIosMail /> info@athh.co
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-darkgreen fs-17">
                    <FaUser /> contact <FaLongArrowAltRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-right pb-2">
        <div className="container">
          <p className="text-center text-secondary">
            © 2024 Athh Technologies LLP. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
