import React, { useState, useEffect, CSSProperties } from "react";
import Header from "../Components/home/header/Header";
import "./Home.css";
import PropagateLoader from "react-spinners/PropagateLoader";
// import "../js/custom.js";
import { Link } from "react-router-dom";
import WOW from "wowjs";
import { FaArrowRight } from "react-icons/fa";
import Counter from "../Components/counter.jsx";
import Footer from "../Components/home/Footer/Footer.jsx";
import TopBtn from "../Components/TopBtn.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("App Development");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="load">
      {loading ? (
        <div className="">
          <PropagateLoader
            color={"red"}
            className="h-100 w-100"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="bgmain">
          {/* header */}
          <Header></Header>

          {/* banner */}
          <section className="pt-150 position-relative banner">
            <img
              src="public/images/banner/sideillusion.png"
              alt="sideillusion"
              className="position-absolute left-0 sideillusion"
            />
            <div className="container">
              <div className="d-flex flex-wrap justify-content-between">
                <div className="col-xs-5 col-sm-12 col-md-8 col-lg-6 col-xl-6">
                  <div className="banner-content w-100 wow animate__animated animate__fadeInLeft">
                    <ul className="p-0 m-0 d-flex align-items-center position-relative">
                      <li className="text-green text-uppercase fs-4 pe-2 py-4">
                        Software
                      </li>
                      <li className="line"></li>
                      <li className="px-1 blueball">
                        <img
                          src="public/images/banner/blueball1.png"
                          alt="blueball"
                          height={150}
                        />
                      </li>
                    </ul>
                    <h2 className="main-text text-uppercase text-multicolor font-goodtime">
                      Development Company
                    </h2>
                    <p className="text-secondary fst-italic fs-17">
                      We Build Innovative Mobile Application, Websites And
                      Blockchain Solutions
                    </p>
                    <button className="btn-bordermain border-0 outline-none bg-transparent my-4 main-btn rounded-20 px-4 py-3">
                      <Link className="text-darkgreen fs-5">
                        Explore Now <FaArrowRight className="ms-2" />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-sm-12 col-xs-12">
                  <div className="banner-img animate__animated animate__fadeInUp">
                    <img
                      src="public/images/banner/banner1.png"
                      alt="banner-img"
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* who we are  */}
          <section className="p-50 py-5 position-relative z-99 overflowx-hidden">
            <div className="container">
              <h3 className="fs-17 text-darkgreen letter-spacing fw-light text-center text-uppercase">
                {" "}
                W h O &nbsp; W E &nbsp; A R E
              </h3>
              <h5 className="text-red text-center py-3 fs-3 font-goodtime wow animate__animated animate__fadeInLeft">
                KRIYONA TECHNOLOGIES
              </h5>
              <p className="text-dark py-3 fs-14 text-center w-75 mx-auto fw-light">
                Kriyona Technologies Design And Develop Mobile Apps, WebApps,
                Blockchain Solutions And That Delight Your Users And <br></br>{" "}
                Grow Your Business. Enterprise-Grade Development Combined With
                Outstanding Design, We Are Not Only A Globally<br></br>{" "}
                Recognized IT Company But Also A Family Filled With Talented
                Expert That Help Global Brands, Enterprises, Mid-Size <br></br>{" "}
                Businesses Or Even Startups With Innovative Solutions.
              </p>
              <div className="text-center">
                <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 px-4 py-3 shadow-blue">
                  <Link className="text-darkgreen fs-5">
                    Read More
                    <FaArrowRight className="ms-2" />{" "}
                  </Link>
                </button>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="p-100 pb-0 position-relative z-99">
            <img
              src="public/images/technologies/pipe.png"
              className="position-absolute right-0 pipe top-50"
              alt="pipe"
            />
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="left-content">
                  <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                    technologies
                  </h3>
                  <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                    We work with
                  </h3>
                </div>
                <div className="right-content">
                  <button className="border-0 outline-none bg-transparent my-2 border-blue rounded-20 p-3 shadow-blue">
                    <Link className="text-red fs-5">
                      Explore Now <FaArrowRight className="ms-2" />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col-12 col-sm-12">
                <div className="blur-background">
                  <div className="container">
                    <div className="d-flex flex-wrap justify-content-between">
                      <div className="col-xs-8 col-sm-10 col-md-8 col-lg-12 col-xl-12 mx-auto">
                        <ul className="nav nav-pills d-flex flex-wrap align-items-center justify-content-between w-100">
                          <li className="nav-item my-3">
                            <button
                              className={`position-relative d-flex align-items-center text-start text-white fs-5 nav-link ${
                                activeTab === "App Development" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("App Development")}
                            >
                              <img
                                src="public/images/technologies/android.svg"
                                alt="android tech"
                                className="pe-2"
                              />
                              App <br />
                              Development
                            </button>
                          </li>
                          <li className="nav-item my-3">
                            <button
                              className={`d-flex align-items-center justify-content-center text-white fs-5 nav-link ${
                                activeTab === "Blockchain" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("Blockchain")}
                            >
                              <img
                                src="public/images/technologies/blockchain.svg"
                                alt="blockchain"
                                className="pe-3"
                              />
                              Blockchain
                            </button>
                          </li>
                          <li className="nav-item my-3">
                            <button
                              className={`d-flex align-items-center justify-content-center text-white fs-5 nav-link ${
                                activeTab === "Game" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("Game")}
                            >
                              <img
                                src="public/images/technologies/game.svg"
                                alt="game"
                                className="pe-3"
                              />
                              Game
                            </button>
                          </li>
                          <li className="nav-item my-3">
                            <button
                              className={`d-flex align-items-center justify-content-center text-white fs-5 nav-link ${
                                activeTab === "UI/UX" ? "active" : ""
                              }`}
                              onClick={() => handleTabClick("UI/UX")}
                            >
                              <img
                                src="public/images/technologies/ui-ux.svg"
                                alt="ui/ux"
                                className="pe-3"
                              />
                              UI/UX
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 tab-content mt-5 bg-lightgreen p-5 rounded-20 border border-secondary text-center">
                        <div
                          className={`tab-pane fade ${
                            activeTab === "App Development" ? "show active" : ""
                          }`}
                          id="App Development"
                        >
                          <h4 className="text-center text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-sm-100 w-md-75 w-lg-50 w-xl-50 mx-auto d-inline-block">
                            App Development
                          </h4>
                          <p className="text-secondary w-sm-100 w-md-75 w-lg-50 w-xl-50 fs-17 mx-auto text-center py-3 line-spacing">
                            We Develop Android, IPhone & IPad Applications,
                            Mobile Apps. You Can Get Multimedia, Finance,
                            Business, Communication And Other Apps Developed.
                          </p>
                          <div className="icons">
                            <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                              <li className="m-3">
                                <img
                                  src="public/images/technologies/icon1.png"
                                  alt="1"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="m-3">
                                <img
                                  src="public/images/technologies/icon2.png"
                                  alt="2"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="m-3">
                                <img
                                  src="public/images/technologies/icon3.png"
                                  alt="3"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="m-3">
                                <img
                                  src="public/images/technologies/icon4.png"
                                  alt="4"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className={`tab-pane fade ${
                            activeTab === "Blockchain" ? "show active" : ""
                          }`}
                          id="Blockchain"
                        >
                          <h4 className="d-inline-block mx-auto text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-50 mx-auto">
                            Blockchain Development
                          </h4>
                          <p className="text-secondary w-75 fs-17 mx-auto text-center py-3 line-spacing">
                            We Create And Build Unique Blockchain Systems Using
                            Hyperledger, EVM, Solidity, Cosmos, Or Substrate. We
                            Know How To Create A Decentralized Platform For
                            NFTs, Bridges, DEXs, The Metaverse, Tokens, And Apps
                            By Building Business Logic And Maintaining
                            Blockchain Nodes.
                          </p>
                          <div className="icons">
                            <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon5.png"
                                  alt="5"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="100"
                                  className="p-3 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"></path>
                                </svg>
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon6.png"
                                  alt="6"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon7.png"
                                  alt="7"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className={`tab-pane fade ${
                            activeTab === "Game" ? "show active" : ""
                          }`}
                          id="Game"
                        >
                          <h4 className="d-inline-block mx-auto  text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-50 mx-auto">
                            Game Development
                          </h4>
                          <p className="text-secondary w-50 text-center fs-17 mx-auto py-3 line-spacing">
                            We Develop Games For Mobile, Web Platforms. Our
                            Developers Have In-Depth Expertise In Cutting-Edge
                            Game Engines Such As Unity And Hands-On Experience
                            Across Multiple Genres.
                          </p>
                          <div className="icons">
                            <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon8.png"
                                  alt="8"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 512 512"
                                  height="100"
                                  className="p-3 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z"></path>
                                </svg>
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon9.png"
                                  alt="9"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon10.png"
                                  alt="10"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className={`tab-pane fade ${
                            activeTab === "UI/UX" ? "show active" : ""
                          }`}
                          id="UI/UX"
                        >
                          <h4 className="d-inline-block mx-auto text-darkgreen fs-1 py-3 font-inter cursor-pointer lines w-75 mx-auto">
                            UI / UX And Graphics Design
                          </h4>
                          <p className="text-secondary w-50 text-center fs-17 mx-auto py-3 line-spacing">
                            UI Focuses On Making It More Visually Appealing And
                            Emotionally Comfortable For The User.
                          </p>
                          <div className="icons">
                            <ul className="m-0 p-0 d-flex flex-wrap justify-content-center py-3">
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon10.png"
                                  alt="11"
                                  className="p-3"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon12.svg"
                                  alt="12"
                                  className="p-4"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon-13.svg"
                                  alt="13"
                                  className="p-4"
                                  height={100}
                                />
                              </li>
                              <li className="mx-3">
                                <img
                                  src="public/images/technologies/icon14.svg"
                                  alt="14"
                                  className="p-4"
                                  height={100}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* portfolio */}
          <section className="p-5">
            <div className="container">
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="d-sm-none d-md-block d-lg-block d-xl-block col-md-5 col-lg-4 col-xl-5  pt-5 mt-5 text-center">
                    <div className="portfolio-img d-inline-block w-100">
                      <img
                        src="public/images/portfolio/portfolio1.png"
                        alt="p1"
                        className="rounded-15 py-4 w-75"
                      />
                    </div>
                    <div className="portfolio-img d-inline-block w-100">
                      <img
                        src="public/images/portfolio/portfolio2.png"
                        alt="p2"
                        className="rounded-15 py-3 w-75"
                      />
                    </div>
                    <h3 className="pt-5">
                      <Link className="text-red fs-2 d-flex align-items-center justify-content-center">
                        {" "}
                        VIEW PORTFOLIO <FaArrowRight className="ms-3" />
                      </Link>
                    </h3>
                  </div>
                  <div className="d-sm-none d-md-block d-lg-block d-xl-block col-md-6 col-lg-6 col-xl-6 left-content">
                    <div className="d-flex align-items-end w-100">
                      <div className="w-65">
                        <div>
                          <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase mt-5 pt-5">
                            HOW WE WORK
                          </h3>
                          <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                            PORTFOLIO
                          </h3>
                        </div>
                        <div className="portfolio-img mt-5 w-5 d-inline-block">
                          <img
                            src="public/images/portfolio/portfolio3.png"
                            alt="p3"
                            className="rounded-15 py-3 w-75"
                          />
                        </div>
                        <div className="portfolio-img d-inline-block">
                          <img
                            src="public/images/portfolio/portfolio4.png"
                            alt="p4"
                            className="rounded-15 py-4 w-75"
                          />
                        </div>
                      </div>
                      <div className="py-5 d-md-none d-sm-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
                        <img
                          src="public/images/portfolio/textportfolio.svg"
                          className=""
                          height={900}
                          alt="text-portfolio"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* downloads,ratings */}
          <section className="p-50">
            <div className="container">
              <div className="d-flex">
                <div className="blur-background3 border border-success  col-9 py-5 mx-auto">
                  <div className="text-white">
                    <div className="w-100" id="counter">
                      <Counter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* customer review */}
          <section className="py-5">
            <div className="container">
              <div className="text-center">
                <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                  CUSTOMER
                </h3>
                <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                  REVIEW
                </h3>
              </div>
              <div className="col-12 pb-5 d-flex flex-wrap justify-content-between align-items-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
                  <div className="customers">
                    <ul className="d-xs-flex d-sm-flex d-md-flex d-lg-block d-xl-block justify-content-evenly">
                      <li className="text-end">
                        <img
                          src="public/images/customers/client1.png"
                          alt="c1"
                          className="rounded-circle border border-dark border-1"
                          height={120}
                        />
                      </li>
                      <li className="text-center">
                        <img
                          src="public/images/customers/client1.png"
                          alt="c1"
                          className="rounded-circle border border-dark border-1"
                          height={120}
                        />
                      </li>
                      <li className="text-end">
                        <img
                          src="public/images/customers/client1.png"
                          alt="c1"
                          className="rounded-circle border border-dark border-1"
                          height={120}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                  <div className="blur-background3 border border-success position-relative z-99">
                    <img
                      src="public/images/comma.png"
                      className="position-absolute quote d-none d-lg-block d-xl-block"
                      alt=""
                    />
                    <div className="p-5">
                      <p className="text-secondary text-center">
                        Working With Athh Technologies Has Been A Pleasant
                        Experience For Me. My Projects Were Developed With
                        Exceptional Work With This Team And I Really Appreciate
                        How They Went About It.
                      </p>
                    </div>
                    <div className="position-absolute client-img">
                      <img
                        src="public/images/customers/client1.png"
                        className="rounded-circle border border-dark border-1 "
                        height={120}
                        alt=""
                      />
                      <p className="text-dark text-center pt-2 fs-5">
                        Vicky Singh
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-none d-lg-block d-xl-bock">
                  <div className="customers">
                    <ul className="d-xs-flex d-sm-flex d-md-flex d-lg-block d-xl-block justify-content-evenly">
                      <li className="text-start">
                        <img
                          src="public/images/customers/client1.png"
                          alt="c1"
                          className="rounded-circle border border-dark border-1"
                          height={120}
                        />
                      </li>
                      <li className="text-center">
                        <img
                          src="public/images/customers/client1.png"
                          alt="c1"
                          className="rounded-circle border border-dark border-1"
                          height={120}
                        />
                      </li>
                      <li className="text-start">
                        <img
                          src="public/images/customers/client1.png"
                          alt="c1"
                          className="rounded-circle border border-dark border-1"
                          height={120}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* methodology */}
          <section className="p-100">
            <div className="container">
              <div className="blur-background3 border border-success col-10 mx-auto">
                <div className="w-100 d-flex flex-wrap align-items-center justify-content-between">
                  <div className="col-6">
                    <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                      the kriyona tech
                    </h3>
                    <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                      methodology
                    </h3>
                  </div>
                  <div className="col-6 justify-content-end d-flex py-5">
                    <button className="border-0 outline-none bg-transparent my-2 border-red rounded-20 px-4 py-3 shadow-red">
                      <Link className="text-darkgreen fs-5">Contact Us</Link>
                    </button>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div className="border-top border-bottom border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">SIMPLICITY</h5>
                      <p className="text-secondary py-2 fs-14">
                        We Believe That The Best Solution Is Usually The Most
                        Straightforward. Effectiveness And Efficiency Are Not
                        Compromised By Simplicity.
                      </p>
                    </div>
                    <div className="border-top border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">
                        EFFECTIVENESS & EFFICIENCY
                      </h5>
                      <p className="text-secondary py-2 fs-14">
                        To Make Sure They Are Really In The Most Effective And
                        Efficient State, Our Team Consistently Evaluates All
                        Past Methodologies, Models, And Procedures. Enabling Us
                        To Constantly Be State-Of-The-Art.
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                    <div className="border-top border-bottom border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">
                        CRITICAL THINKING
                      </h5>
                      <p className="text-secondary py-2 fs-14">
                        Our Team Members Were Chosen In Part For Their
                        Demonstrated Ability To Think Creatively, Logically, And
                        Critically About A Problem And Its Solution.
                      </p>
                    </div>
                    <div className="border-top border-1 border-secondary py-4">
                      <h5 className="text-green fs-5 py-2">SECURITY</h5>
                      <p className="text-secondary py-2 fs-14">
                        Security And The Other Mentioned Principles Begin During
                        The Design Phase. When Reviewing Or Creating A Design,
                        Follows The KISS Principle. We Assist Our Clients In
                        Designing Security And Simplicity From The Ground Up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* why kriyona */}
          <section className="why-kriyona">
            <div className="container">
              <div className="text-center">
                <h3 className="fs-17 text-darkgreen fw-light letter-spacing text-uppercase">
                  WHY
                </h3>
                <h3 className="text-uppercase fw-bold text-red py-3 font-goodtime">
                  kriyona TECH
                </h3>
              </div>
              <div className="py-3 position-relative d-flex flex-wrap align-items-center justify-content-center">
                <img
                  src="public/images/why kriyona/bigline.svg"
                  alt="bigline"
                  className="position-absolute top-59 w-100"
                />
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 position-relative z-99">
                  <div className="mx-auto w-140 text-center rounded-circle blur-background2 border border-1 boredr-white">
                    <img src="public/images/why kriyona/bulb.svg" alt="bulb" />
                  </div>
                  <h2 className="text-darkgreen fs-75 fw-bold d-inline-block position-absolute number">
                    01
                  </h2>
                </div>
                <div className="col-3 position-relative z-99">
                  <div className="mx-auto w-140 text-center rounded-circle blur-background2 border border-1 boredr-white">
                    <img src="public/images/why kriyona/eye.svg" alt="eye" />
                  </div>
                  <h2 className="text-darkgreen fs-75 fw-bold d-inline-block position-absolute number">
                    02
                  </h2>
                </div>
                <div className="col-3 position-relative z-99">
                  <div className="mx-auto w-140 text-center rounded-circle blur-background2 border border-1 boredr-white">
                    <img
                      src="public/images/why kriyona/value.svg"
                      alt="value"
                    />
                  </div>
                  <h2 className="text-darkgreen fs-75 fw-bold d-inline-block position-absolute number">
                    03
                  </h2>
                </div>
              </div>
            </div>
          </section>

          {/* newsletter */}
          <section className="p-50">
            <div className="container">
              <div className="blur-background3 shadow col-10 mx-auto">
                <h3 className="text-uppercase text-center fw-bold text-darkgreen py-3 font-goodtime">
                  newsletter
                </h3>
                <p className="fs-17 text-secondary py-4 text-center w-50 mx-auto">
                  Follow Our Most Recent News And Events. Join Our Newsletter
                  Today.
                </p>
                <form className="text-center py-3">
                  <input
                    type="text"
                    placeholder="Enter Message"
                    className="border-red rounded-pill px-4 py-3 text-dark bg-transparent w-50 fs-5"
                  />
                  <button className="shadow-red d-block mx-auto mt-5 rounded-pill px-5 py-3 bg-red border-0 outline-none m-0 p-0">
                    <Link className="text-white">
                      Subscribe <FaArrowRight />
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* footer */}
          <Footer></Footer>
          {/* topbtn */}
          <TopBtn></TopBtn>
        </div>
      )}
    </div>
  );
};

export default Home;
