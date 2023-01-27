import React, { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setVisible(false);
      window.addEventListener("scroll", toggleVisible);
    }
  }, []);

  return (
    <div className="flex fixed xs:w-[2rem] md:w-[4rem] xl:w-[5rem] left-[90%] bottom-[50vh] height-[20px] text-[0.5rem] text-center z-[1] cursor-pointer text-[green]   ">
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};
export default ScrollButton;
