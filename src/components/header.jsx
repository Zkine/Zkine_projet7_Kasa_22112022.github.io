import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/main.scss";


function Header() {

  const location = useLocation();

  return (
    <header className="conteneurheader">
      <nav>
        <ul className="conteneurheader__ul">
          <li>
            <Link className={location.pathname === "/" ? "conteneurheader--accueil" : "conteneurheader--accueilnonsouligne"} to={`/`}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/A_propos" ? "conteneurheader--propos" : "conteneurheader--proposnonsouligne"}
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
        className="conteneurheader__img"
      />
    </header>
  );
}

export default Header;
