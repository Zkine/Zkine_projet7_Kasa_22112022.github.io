import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Logement from "./pages/Logement";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Logement" element={<Logement />} />
        <Route exact path="/A_propos" element={<Apropos />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

