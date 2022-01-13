import React from "react";
import { Route, Routes as RouterDOMRoutes } from "react-router-dom";

import Projects from "../pages/Projects";
import ArchivedProjects from "../pages/ArchivedProjects";
import Tables from "../pages/Tables";
import NotFound from "../pages/NotFound";

const Routes: React.FC = () => (
  <RouterDOMRoutes>
    <Route path="/" element={<Projects />} />
    <Route path="/archived" element={<ArchivedProjects />} />
    <Route path="/tables" element={<Tables />} />
    <Route path="/*" element={<NotFound />} />
  </RouterDOMRoutes>
);

export default Routes;
