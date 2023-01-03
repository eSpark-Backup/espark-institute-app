import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import LayoutOne from "../layout/layoutOne";
import Home from "../screens/home";

const AppRoutes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let routes = useRoutes([{ path: "/", element: <Home /> }]);

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
