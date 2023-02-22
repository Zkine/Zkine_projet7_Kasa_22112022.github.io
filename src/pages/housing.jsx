import { useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";
import StarsColors from "../components/starsColors";
import Collapse from "../components/collapse";
import JsnData from "../data/data.json";
import Error from "./error";
import "../styles/main.scss";

function Logement() {
  const { id } = useParams();

  const logementResult = JsnData.find((el) => el.id === `${id}`);

  if (logementResult === undefined) {
    return <Error />;
  }

  const titre = {
    description: "description",
    equipements: "equipements",
  };

  const LogementResultDom = logementResult["equipments"].map((el) => (
    <li className="conteneurcollapse--equipement" key={el.toString()}>{el}</li>
  ));

  return (
    <main>
      <article>
        <Slideshow logementFind={logementResult} />
        <section className="stylehousing">
          <div className="stylehousing__conteneur">
            <div className="stylehousing__titre">
              <h1 className="stylehousing__h1">
                {logementResult.title}
              </h1>
              <p className="stylehousing__plocation">
                {logementResult.location}
              </p>
            </div>
            <div className="stylehousing__tags">
              {logementResult.tags.map((element) => (
                <span
                  className="stylehousing__spantags"
                  key={element.toString()}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
          <div className="conteneurportrait">
            <div className="conteneurportrait__profil">
              <p className="conteneurportrait__nom">
                {logementResult.host.name}
              </p>
              <img
                src={logementResult.host.picture}
                alt="Portrait du créateur de l'annonce"
                className="conteneurportrait__portrait"
              />
            </div>
            <StarsColors starsInits={5} rating={logementResult.rating} />
          </div>
        </section>
        <section className="collapsehousing">
          <div className="collapsehousing__conteneurdescription">
            <Collapse
              titre={titre.description}
              description={logementResult["description"]}
              className="collapsehousing__el"
            />
          </div>
          <div className="collapsehousing__conteneurequipments">
            <Collapse
              titre={titre.equipements}
              description={<ul className="collapsehousing__ul">{LogementResultDom}</ul>}
              className="collapsehousing__el"
            />
          </div>
        </section>
      </article>
    </main>
  );
}

export default Logement;
