import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Housing from "../pages/housing";
import About from "../pages/about";
import Error from "../pages/error";

function RouterKasa() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Logement/:id" element={<Housing />} />
      <Route exact path="/A_propos" element={<About />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RouterKasa;
