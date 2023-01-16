import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../styles/header.scss";


function Header() {
  return (
    <header className="conteneurHeader">
      <nav >
        <ul className="conteneurHeader__ul">
          <li>
            <Link className="conteneurHeader__ul__accueil" to={`/`}>Accueil</Link>
          </li>
          <li>
            <Link className="conteneurHeader__ul__accueil__propos" to={`/A_propos`}>A Propos</Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="Logo Kasa" className="conteneurHeader__ul__accueil__propos__img" />
    </header>
  );
}

export default Header;
