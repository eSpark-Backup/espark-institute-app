import React from "react";
import Header from "./header";
import TopBar from "./topBar";

const HeaderSection = () => {
  return (
    <div>
      <header
        id="page-header"
        className="page-header header-03 header-dark header-layout-fixed nav-links-hover-style-01 header-sticky-dark-logo"
      >
        <div className="page-header-place-holder"></div>
        <div
          id="page-header-inner"
          className="page-header-inner"
          data-sticky="1"
        >
          <TopBar />
          <Header />
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
