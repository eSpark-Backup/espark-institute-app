import React, { useEffect, useState } from "react";
import HeaderSection from "../components/topComponents/header";
import Footer from "./../components/bottomComponets/footer";

const   LayoutOne = ({ children }) => {


  const [fullWidth, setFullWidth] = useState("page-template-default page page-id-1326 wp-embed-responsive theme-edumall woocommerce-js desktop edumall-light-scheme mobile-menu-push-to-left woocommerce header-sticky-both wide page-has-no-sidebar title-bar-05 elementor-default elementor-kit-47 elementor-page elementor-page-1326 e--ua-blink e--ua-chrome e--ua-webkit loaded desktop-menu dashboard-nav-fixed")
  const [medium, setMedium] = useState("page-template-default page page-id-1326 wp-embed-responsive theme-edumall woocommerce-js desktop edumall-light-scheme mobile-menu-push-to-left woocommerce header-sticky-both wide page-has-no-sidebar title-bar-05 elementor-default elementor-kit-47 elementor-page elementor-page-1326 e--ua-blink e--ua-chrome e--ua-webkit loaded mobile-menu")
  const [mobileView,setMobileView] = useState("page-template-default page page-id-1326 wp-embed-responsive theme-edumall woocommerce-js desktop edumall-light-scheme mobile-menu-push-to-left woocommerce header-sticky-both wide page-has-no-sidebar title-bar-05 elementor-default elementor-kit-47 elementor-page elementor-page-1326 e--ua-blink e--ua-chrome e--ua-webkit loaded mobile-menu")
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [openWindow,setOpenWindow] = useState("page-template-default page page-id-706 wp-embed-responsive theme-edumall woocommerce-js desktop edumall-light-scheme mobile-menu-push-to-left woocommerce header-sticky-both wide page-has-no-sidebar title-bar-none elementor-default elementor-kit-47 elementor-page elementor-page-706 e--ua-blink e--ua-chrome e--ua-webkit loaded mobile-menu page-mobile-menu-opened")

  const [open, setOpen] = useState(true)

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <>
      <div id="page" >
        <div className={ open ?  ((windowSize.innerWidth < 600) ? mobileView :(windowSize.innerWidth > 600 && windowSize.innerWidth<900)? medium: fullWidth) : openWindow}>
          <HeaderSection setOpen ={setOpen} open ={open}  />
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
