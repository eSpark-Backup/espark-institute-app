import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import LayoutOne from "../layout/layoutOne";
import Home from "../screens/home";
import ContactUs from "../screens/home/contact/contact-us";

const AppRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      path: "/contact-us",
      element: <ContactUs />,
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
