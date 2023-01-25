import React, { useEffect, useState } from "react";
import HeaderSection from "../components/topComponents/header";
import Footer from "../components/bottomComponets/footer";
import { FULL_WIDTH, MEDIUM,MOBILE_VIEW,OPEN_WINDOW } from "../constants";
import { getWindowSize } from "../utils/utils";

const LayoutOne = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
   const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div id="page">
        <div
          className={
            open
                ? windowSize.innerWidth < 600
                ? MOBILE_VIEW
                : windowSize.innerWidth > 600 && windowSize.innerWidth < 900
                ? MEDIUM
                : FULL_WIDTH
                : OPEN_WINDOW
          }
        >
          <HeaderSection setOpen={setOpen} open={open} />
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div id="page-main-content" className="page-main-content">
                {children}
              </div>
            </div>
          </div>
        </div>
        <div id="page-footer-wrapper" className="page-footer-wrapper ">
          <div className="footer-margin-150">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayoutOne;
