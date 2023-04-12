import React from "react";
import SEO from "../../common/SEO";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import AboutFive from "../../components/about/AboutFive";
import LogoOne from "../../components/logos/LogoOne";
import HomeFiveProgress from "../../components/home-five/HomeFiveProgress";
import AboutUsThreeMission from "../../components/about-us-three/AboutUsThreeMission";
import AboutUsThreeInstructor from "../../components/about-us-three/AboutUsThreeInstructor";
import CounterUpOne from "../../components/counterup/CounterUpOne";
import TestimonialSectionTwo from "../../components/testimonial-section/TestimonialSectionTwo";
import HomeOneInstructor from "../../components/home-one/HomeOneInstructor";

const AboutUsThree = () => {
  return (
    <>
      <SEO title="About Us" />

      <BreadcrumbOne
        title="About Us"
        rootUrl="/"
        parentUrl="Home"
        currentUrl="About Us"
      />

      <AboutFive wrapperClass="edu-section-gapTop" />

      <LogoOne separator="disable" />

      <HomeFiveProgress />

      <AboutUsThreeMission />
      <HomeOneInstructor background={"bg-color-white"} color={"#20A39E"} />
      {/* <AboutUsThreeInstructor /> */}

      <CounterUpOne />

      <TestimonialSectionTwo classes="counterup-overlay-top" />
    </>
  );
};

export default AboutUsThree;
