import React, { useState } from "react";
import { FaRegHandPointUp } from "react-icons/fa";
const TopBtn = () => {
  const [visible, setVisible] = useState(false);

  const ToggleVisible = () => {
    const scrolled = document.getElementById.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const ScrollToTOP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", ToggleVisible);
  return (
    <>
      <button onClick={ScrollToTOP} className="topbtn">
        <FaRegHandPointUp></FaRegHandPointUp>
      </button>
    </>
  );
};

export default TopBtn;
