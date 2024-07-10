import React, { useEffect, useState } from "react";
import Header from "../Components/home/header/Header";
import Footer from "../Components/home/Footer/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
import TopBtn from "../Components/TopBtn";
import "../Pages/About.css";

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
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
          <section className="pt-150">
            <div className="container">
              <div className="pb-4 border-bottom border-green">
                <h3 className="text-center text-red fs-1 fw-bold font-goodtime text-uppercase">
                  About Us
                </h3>
                <p className="text-darkgreen text-center">HOME / About Us</p>
              </div>
              <div className="d-flex flex-wrap align-items-center py-5">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <h6 className="text-darkgreen fs-17 letter-spacing8 py-3">
                    WHO ARE WE
                  </h6>
                  <h3 className="text-red font-goodtime w-75 fs-1 line-spacing50">
                    ATHH TECHNOLOGIES
                  </h3>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  We Maintain Transparency, Satisfaction Level & Integrity With
                  Our Valuable Clients By Building On Pillars Of Work Ethics &
                  Continuous Innovation.
                </div>
              </div>
            </div>
          </section>
          <section className="p-100">
            <div className="container">
              <div className=" position-relative mb-80 ">
                <div className="digit-about position-absolute">01</div>
                <p className="fs-3 font-goodtime text-darkgreen m-0">
                  Transparency
                </p>
                <p className="fs-5 text-secondary py-1">
                  Our Primary Goal Has Always Been To Put Forth Constant Effort
                  And Drive The Growth Of The Client's Business.
                </p>
              </div>
              <div className=" position-relative mb-80 py-5">
                <div className="digit-about position-absolute b-56">02</div>
                <p className="fs-3 font-goodtime text-darkgreen m-0">
                  Fairness
                </p>
                <p className="fs-5 text-secondary py-1">
                  Regardless Of How Big Or Little The Client's Requirement Is,
                  We Treat Every Job With The Same Importance And Put Our Best
                  Effort Forward.
                </p>
              </div>
              <div className=" position-relative">
                <div className="digit-about position-absolute">03</div>
                <p className="fs-3 font-goodtime text-darkgreen m-0">Focus</p>
                <p className="fs-5 text-secondary py-1">
                  While Working On Any Company Decision-Making Process, We Are
                  Adamant About Keeping Complete Openness.
                </p>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="d-flex flex-wrap align-items-center pt-5 justify-content-between py-5">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-5">
                  <img
                    src="public/images/about/img1.png"
                    alt="img"
                    className="w-100 rounded-20"
                    height={420}
                    width={406}
                  />
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 pb-5">
                  <p className="py-2 text-darkgreen fw-bold letter-spacing fs-17">
                    WE SPECIALIZE IN
                  </p>
                  <h5 className="text-red fw-bold font-goodtime fs-3">
                    PROJECTS THAT COMBINE
                  </h5>
                  <p className="py-3 font-inter">
                    The Business Strategy And Technology Into Business As Well
                    As We Enable Our Customers To Bring The Correct Mix Of
                    Procedure, Innovation, Experience And Imagination To Each
                    Part Of Their Web And Mobile Based Tasks.
                  </p>
                  <ul className="d-flex flex-wrap liststyle ps-2 m-0 justify-content-between">
                    <div className="col-6">
                      <li className="py-2 fs-14 fw-bold">OBJECTIVE</li>
                      <li className="py-2 fs-14 fw-bold">STRATEGY</li>
                    </div>
                    <div className="col-6">
                      <li className="py-2 fs-14 fw-bold">TECHNOLOGY</li>
                      <li className="py-2 fs-14 fw-bold">ANALYTICS</li>
                    </div>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-xs-12 pt-5">
                  <p className="py-2 text-darkgreen fw-bold letter-spacing fs-17">
                    EVERY PROJECT HAS
                  </p>
                  <h5 className="text-red fw-bold font-goodtime fs-3">
                    ITS OWN UNIQUE GOALS AND VISION
                  </h5>
                  <p className="py-3 font-inter">
                    Whatever Your Project Demands, Our Extended Network Of
                    Strategists, Creatives And Technology Specialists Is Always
                    Eager To Pitch In. We Know It Helps To Know Good People.
                  </p>
                  <ul className="d-flex flex-wrap liststyle ps-2 m-0 justify-content-between">
                    <div className="col-6">
                      <li className="py-2 fs-14 fw-bold">RESEARCH</li>
                      <li className="py-2 fs-14 fw-bold">TARGETING</li>
                    </div>
                    <div className="col-6">
                      <li className="py-2 fs-14 fw-bold">DATA COLLECTION</li>
                      <li className="py-2 fs-14 fw-bold">PROBLEM SOLVING</li>
                    </div>
                  </ul>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5">
                  <img
                    src="public/images/about/img2.png"
                    alt="img"
                    className="w-100 rounded-20"
                    height={420}
                    width={406}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* footer */}
          <Footer></Footer>
          <TopBtn></TopBtn>
        </div>
      )}
    </div>
  );
};

export default About;
