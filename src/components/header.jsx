import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { useLocation } from "react-router-dom";


function Header() {

  const location = useLocation();

  return (
    <header className="conteneurHeader">
      <nav>
        <ul className="conteneurHeader__ul">
          <li>
            <Link className={location.pathname === "/" ? "conteneurHeader__ul__accueil" : "conteneurHeader__ul__accueilnonsouligne"} to={`/`}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/A_propos" ? "conteneurHeader__ul__propos" : "conteneurHeader__ul__proposnonsouligne"}
              to={`/A_propos`}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
      <img
        src={logo}
        alt="Logo Kasa"
        className="conteneurHeader__ul__img"
      />
    </header>
  );
}

export default Header;
