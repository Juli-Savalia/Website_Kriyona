// src/components/Counter.js
import React, { useEffect, useState } from "react";
import "../Pages/Home.css";
import { startCounter } from "../js/countdown";

const Counter = () => {
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    const counters = [
      { className: "downloads", startValue: 0, endValue: 100 },
      { className: "uploads", startValue: 0, endValue: 2 },
      { className: "users", startValue: 0, endValue: 80 },
    ];

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counting) {
          setCounting(true);
          startCounter(counters, setCounting);
        } else if (!entry.isIntersecting && counting) {
          setCounting(false);
          counters.forEach((counter) => {
            document.querySelector(`.${counter.className}`).innerText = `0M+`;
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });
    const counterElement = document.getElementById("counter");
    if (counterElement) {
      observer.observe(counterElement);
    }

    return () => {
      if (counterElement) {
        observer.unobserve(counterElement);
      }
    };
  }, [counting]);

  return (
    <div id="counter" className="text-center">
      <div className="d-inline-block">
        <span className="counter-value downloads px-4" data-count="100">
          0M+
        </span>
        <p className="py-2 text-secondary fs-12 m-0 text-center">Downloads</p>
      </div>
      <div className="d-inline-block">
        <span className="counter-value uploads px-4" data-count="90">
          0M+
        </span>
        <p className="py-2 text-secondary fs-12 m-0 text-center">Ratings</p>
      </div>
      <div className="d-inline-block">
        <span className="counter-value users px-4" data-count="80">
          0M+
        </span>
        <p className="py-2 text-secondary fs-12 m-0 text-center">
          Project Completed
        </p>
      </div>
    </div>
  );
};

export default Counter;
