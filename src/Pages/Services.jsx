import React, { useEffect, useState } from "react";
import Header from "../Components/home/header/Header";
import Footer from "../Components/home/Footer/Footer";
import "../Pages/Services";
import TopBtn from "../Components/TopBtn";
import { services } from "../Data/Services";
import { FaLess } from "react-icons/fa";
import { PropagateLoader } from "react-spinners";
const Services = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div className="load">
      {loading ? (
        <div>
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
          <Header></Header>
          <section className="pt-150">
            <div className="container mx-auto">
              <div className="pb-4 border-bottom border-green">
                <h3 className="text-center text-red fs-1 fw-bold font-goodtime text-uppercase">
                  Services
                </h3>
                <p className="text-darkgreen text-center">HOME / SERVICES</p>
              </div>
              <div className="d-flex flex-wrap py-5 align-items-center justify-content-evenly">
                <div className="col-5">
                  <h6 className="text-darkgreen fs-17 letter-spacing8 py-3">
                    OUR SERVICES
                  </h6>
                  <h3 className="text-red font-goodtime w-75 fs-3 line-spacing50">
                    TECHNOLOGIES WE WORK WITH
                  </h3>
                </div>
                <div className="col-5">
                  ATHH TECH Is A Place Where Developers Can Convert Their
                  Designs Into Developer-Friendly Code For Mobile And Web Apps.
                  Athh Tech Automates The Application Development Lifecycle And
                  Generates Readable, Modular, And Reusable Code In Real Time.
                </div>
              </div>
              <div>
                <div className="col-12 d-flex flex-wrap justify-content-evenly">
                  {services &&
                    services.map((item, index) => {
                      return (
                        <div className="box p-5 border border-success col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 rounded-20 mb-5">
                          <h5 className="font-goodtime w-75 line-spacing fs-5">
                            {item.name}
                          </h5>
                          <div className="inner-box bg-greenshade5 py-5 px-3 fs-10 rounded-20">
                            <div>
                              <p className="m-0 p-0">{item.text}</p>
                              <ul
                                className="py-3"
                                style={{ listStyle: "disc" }}
                              >
                                {item.list &&
                                  item.list.map((l) => {
                                    return (
                                      <li className="fs-17 pb-2">{l.li}</li>
                                    );
                                  })}
                              </ul>
                              <ul className="py-3 d-flex flex-wrap justify-content-evenly m-0 px-0">
                                {item.icons &&
                                  item.icons.map((l) => {
                                    return (
                                      <li className="fs-17 pb-2">
                                        <img src={l.img} alt="" height={50} />
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </section>
          <Footer></Footer>
          <TopBtn></TopBtn>
        </div>
      )}
    </div>
  );
};

export default Services;
