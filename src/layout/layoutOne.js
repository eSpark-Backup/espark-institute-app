import React from "react";
import Header from "../components/topComponents/header";
import Footer from "./../components/bottomComponets/footer";

const LayoutOne = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutOne;
