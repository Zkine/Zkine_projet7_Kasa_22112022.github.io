import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import RouteKasa from "./components/routeKasa";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <RouteKasa/>
      <Footer />
    </Router>
  </React.StrictMode>
);
