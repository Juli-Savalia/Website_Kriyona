import React from "react";
import Header from "../Components/home/header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bgmain">
      {/* header */}
      <Header></Header>

      {/* banner */}
      <section className="p-50 position-relative banner">
        <img
          src="public/images/banner/sideillusion.png"
          alt="sideillusion"
          className="position-absolute left-0 sideillusion h-75"
        />
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            <div className="col-md-7 col-lg-7 col-xl-7 col-12">
              <div className="banner-content">
                <ul className="p-0 m-0 d-flex align-items-center">
                  <li className="text-white text-uppercase fs-2 pe-2">
                    Software
                  </li>
                  <li className="line"></li>
                  <li className="px-1">
                    <img
                      src="public/images/banner/blueball.svg"
                      alt="blueball"
                    />
                  </li>
                </ul>
                <h2 className="main-text text-uppercase text-white">
                  <span>Development </span>Company
                </h2>
                <p className="text-secondary fst-italic fs-5">
                  We Build Innovative Mobile Application, Websites And
                  Blockchain Solutions
                </p>
                <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 px-4 py-3 shadow-blue">
                  <Link className="text-white fs-5">
                    Explore Now <FaArrowRight className="ms-2" />
                  </Link>
                </button>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
              <div className="banner-img">
                <img
                  src="public/images/banner/banner.svg"
                  alt="banner-img"
                  className="w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* who we are  */}
      <section className="p-50 py-5">
        <div className="container">
          <h3 className="fs-5 text-info letter-spacing fw-light text-center text-uppercase">
            {" "}
            W h O &nbsp; W E &nbsp; A R E
          </h3>
          <h5 className="text-white text-center py-3 fs-3 fw-bold">
            KRIYONA TECHNOLOGIES
          </h5>
          <p className="text-white py-3 fs-14 text-center w-75 mx-auto fw-light">
            Kriyona Technologies Design And Develop Mobile Apps, WebApps,
            Blockchain Solutions And That Delight Your Users And <br></br> Grow
            Your Business. Enterprise-Grade Development Combined With
            Outstanding Design, We Are Not Only A Globally<br></br> Recognized
            IT Company But Also A Family Filled With Talented Expert That Help
            Global Brands, Enterprises, Mid-Size <br></br> Businesses Or Even
            Startups With Innovative Solutions.
          </p>
          <div className="text-center">
            <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 px-4 py-3 shadow-blue">
              <Link className="text-white fs-5">
                Read More
                <FaArrowRight className="ms-2" />{" "}
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="p-100">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <div className="left-content">
              <h3 className="fs-5 text-info fw-light letter-spacing text-uppercase">
                technologies
              </h3>
              <h3 className="text-uppercase fw-bold text-white py-2">
                WE work with
              </h3>
            </div>
            <div className="right-content">
              <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 p-3 shadow-blue">
                <Link className="text-white fs-5">
                  Explore Now <FaArrowRight className="ms-2" />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
