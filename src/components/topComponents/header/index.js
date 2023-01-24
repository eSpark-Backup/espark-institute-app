import React from "react";
import Footer from "../../bottomComponets/footer";
import Header from "./header";
import TopBar from "./topBar";

import { topBarJson } from "../../../helper/top-bar";

const HeaderSection = ({setOpen, open}) => {
  return (
    <div>
      <header
        id="page-header"
        className="header-03 header-dark header-layout-fixed nav-links-hover-style-01 header-sticky-dark-logo"
      >
        <div className="page-header-place-holder held"></div>
        <div
          id="page-header-inner"
          className="page-header-inner"
          data-sticky="1"
        >
          <TopBar data={topBarJson} />
          <Header setOpen ={setOpen} open ={open}  />
        </div>
      </header>
    </div>
  );
};

export default HeaderSection;
