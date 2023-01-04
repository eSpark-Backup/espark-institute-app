import React from "react";
import HeaderSection from "../components/topComponents/header";
import Footer from "./../components/bottomComponets/footer";

const LayoutOne = ({ children }) => {
  return (
    <>
      <div class="home page-template-default page page-id-437 wp-embed-responsive theme-edumall woocommerce-no-js desktop desktop-menu edumall-light-scheme mobile-menu-push-to-left woocommerce header-sticky-both wide page-has-no-sidebar title-bar-none elementor-default elementor-kit-47 elementor-page elementor-page-437">
        <div class="content-wrapper"></div>
        <HeaderSection />
        <div id="page-content" class="page-content">
          <div class="container"> {children}</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LayoutOne;
