import React from "react";
import FooterOne from "./footer/FooterOne";
import HeaderTwo from "./header/HeaderTwo";

const Layout = ({ children }) => {
  return (
    <>
      <main className="main-wrapper">
        <HeaderTwo styles="header-transparent header-style-2" />
        {children}
        <FooterOne />
      </main>
    </>
  );
};
export default Layout;
