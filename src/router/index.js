import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import LayoutOne from "../layout/layoutOne";
import About from "../screens/about/about";
import ContactUs from "../screens/contact";

const AppRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let routes = useRoutes([
    {
      path: "/contact-us",
      element:  <ContactUs />,
    },
    {
      path: "/about-us",
      element:  <About />,
    },
  ]);

  return routes;
};

const AppWraper = () => {
  return (
    <Router>
      <LayoutOne>
        <AppRoutes />
      </LayoutOne>
    </Router>
  );
};

export default AppWraper;
