import React from "react";
import Components from "pages/Components";
import HowToUse from "pages/HowToUse";
import Welcome from "pages/Welcome";
import Thumbnail from "pages/Thumbnail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/thumbnail" element={<Thumbnail />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/howtouse" element={<HowToUse />} />
        <Route path="/components" element={<Components />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
