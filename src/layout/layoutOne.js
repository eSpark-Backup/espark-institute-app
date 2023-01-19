import React from "react";
import HeaderSection from "../components/topComponents/header";
import Footer from "./../components/bottomComponets/footer";

const LayoutOne = ({ children }) => {
  return (
    <>
      <div id="page">
        my name is ali 
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
        <div id="page-footer-wrapper" className="page-footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default LayoutOne;
