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

  return (
    <main>
      <article>
        <Slideshow logementFind={logementResult} />
        <section className="styleSection">
          <div className="styleSection__conteneur">
            <div className="styleSection__conteneur__titre">
              <h1 className="styleSection__conteneur__titre__h1"  key={logementResult.title.toString()}>
                {logementResult.title}
              </h1>
              <p className="styleSection__conteneur__titre__h1__pLocation" key={logementResult.location.toString()}>
                {logementResult.location}
              </p>
            </div>
            <div className="styleSection__conteneur__titre__h1__pLocation__tags">
              {logementResult.tags.map((element) => (
                <span className="styleSection__conteneur__titre__h1__pLocation__tags__spanTags" key={element.toString()}>
                  {element}
                </span>
              ))}
            </div>
          </div>
          <div className="conteneurPortrait">
            <div className="conteneurPortrait--profil">
              <p className="conteneurPortrait__nom">{logementResult.host.name}</p>
              <img
                src={logementResult.host.picture}
                alt="Portrait du créateur de l'annonce"
                className="conteneurPortrait__nom__portrait"
              />
            </div>
            <StarsColors
              starsInits={5}
              empty={[1, 2, 3, 4, 5]}
              starsValue={logementResult.rating}
              logementFind={logementResult}
            />
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
              description={logementResult["equipments"]}
              className="collapseHousing__ConteneurEquipments__El"
            /><br/>
          </div>
        </section>
      </article>
    </main>
  );
}

export default Logement;
