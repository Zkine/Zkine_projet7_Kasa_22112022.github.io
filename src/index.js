import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { createGlobalStyle } from "styled-components";
import RouteKasa from "./components/routeKasa";

const root = createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
body {
  margin:0;
}
    div {
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
`;


root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <RouteKasa/>
      <Footer />
    </Router>
  </React.StrictMode>
);
