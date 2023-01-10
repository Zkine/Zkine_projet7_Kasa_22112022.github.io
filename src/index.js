import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Housing from "./pages/housing";
import About from "./pages/about";
import Error from "./pages/error";
import Header from "./components/header";
import Footer from "./components/footer";
import { createGlobalStyle } from "styled-components";

const root = createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
`;


root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Logement/:id" element={<Housing />} />
        <Route exact path="/A_propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
