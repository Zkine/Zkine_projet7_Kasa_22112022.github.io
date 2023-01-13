import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../styles/header.scss";


function Header() {
  return (
    <header className="conteneur">
      <nav >
        <ul className="conteneur__ul">
          <li>
            <Link className="conteneur__ul__accueil" to={`/`}>Accueil</Link>
          </li>
          <li>
            <Link className="conteneur__ul__accueil__propos" to={`/A_propos`}>A Propos</Link>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="Logo Kasa" className="conteneur__ul__accueil__propos__img" />
    </header>
  );
}

export default Header;
