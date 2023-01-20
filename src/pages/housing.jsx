import { useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";
import StarsColors from "../components/starsColors";
import "../styles/housing.scss";
import Collapse from "../components/collapse";
import JsnData from "../data/data.json";
import Error from "./error";

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

  const logementResultDom= logementResult["equipments"].map((el) => (
    <li className="descriptionEquipement" key={el.toString()}>{el}</li>
  ));

  return (
    <main>
      <article>
        <Slideshow logementFind={logementResult} />
        <section className="styleSection">
          <div className="styleSection__conteneur">
            <div className="styleSection__conteneur__titre">
              <h1 className="styleSection__conteneur__titre__h1">
                {logementResult.title}
              </h1>
              <p className="styleSection__conteneur__titre__h1__pLocation">
                {logementResult.location}
              </p>
            </div>
            <div className="styleSection__conteneur__titre__h1__pLocation__tags">
              {logementResult.tags.map((element) => (
                <span
                  className="styleSection__conteneur__titre__h1__pLocation__tags__spanTags"
                  key={element.toString()}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
          <div className="conteneurPortrait">
            <div className="conteneurPortrait__profil">
              <p className="conteneurPortrait__profil__nom">
                {logementResult.host.name}
              </p>
              <img
                src={logementResult.host.picture}
                alt="Portrait du créateur de l'annonce"
                className="conteneurPortrait__profil__nom__portrait"
              />
            </div>
            <StarsColors starsInits={5} rating={logementResult.rating} />
          </div>
        </section>
        <section className="collapseHousing">
          <div className="collapseHousing__ConteneurDescription">
            <Collapse
              titre={titre.description}
              description={logementResult["description"]}
              className="collapseHousing__ConteneurDescription__El"
            />
          </div>
          <div className="collapseHousing__ConteneurEquipments">
            <Collapse
              titre={titre.equipements}
              description={logementResultDom}
              className="collapseHousing__ConteneurEquipments__El"
            />
          </div>
        </section>
      </article>
    </main>
  );
}

export default Logement;
