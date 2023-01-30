import page404 from "../assets/404.svg";
import { Link } from "react-router-dom";
import "../styles/main.scss";

function Error() {
  return (
    <main>
      <section className="stylesection">
        <img src={page404} alt="Error 404" className="stylesection__img" />
        <p className="stylesection__p">
          Oups! La page que <br className="stylesection__br" />
          vous demandez n'existe pas.
        </p>
        <Link className="stylesection__link" to={`/`}>
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  );
}

export default Error;
