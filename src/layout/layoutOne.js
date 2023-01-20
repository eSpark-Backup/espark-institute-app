import React from "react";
import HeaderSection from "../components/topComponents/header";
import Footer from "./../components/bottomComponets/footer";

const   LayoutOne = ({ children }) => {
  return (
    <>
      <div id="page">
        <div className="content-wrapper">
          <HeaderSection />
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
