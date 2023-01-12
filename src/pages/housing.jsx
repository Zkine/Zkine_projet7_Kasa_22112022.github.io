import { useFetch } from "../components/controllerFetch";
import { Loader } from "../styles/Atoms";
import { useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";
import StarsColors from "../components/starsColors";
import "../styles/housing.scss";

function Logement() {
  const {id} = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/data.json`
  );
  const logementsData = data;
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  const logementFind =
    logementsData.forEach && logementsData.find((el) => el["id"] === `${id}`);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <article>
          <Slideshow logementFind={logementFind} />

          <section className="styleSection">
            <div className="styleSection__conteneur">
              <div className="styleSection__conteneur__titre">
                <h1 className="styleSection__conteneur__titre__h1">
                  {logementFind["title"]}
                </h1>
                <p className="styleSection__conteneur__titre__h1__pLocation">
                  {logementFind["location"]}
                </p>
              </div>
              <div className="styleSection__conteneur__titre__h1__pLocation__tags">
                {logementFind["tags"].map((element) => (
                  <span className="styleSection__conteneur__titre__h1__pLocation__tags__spanTags">
                    {element}
                  </span>
                ))}
              </div>
            </div>
            <div className="conteneurPortrait">
              <p className="conteneurPortrait__nom">{logementFind["host"]["name"]}</p>
              <img
                src={logementFind["host"]["picture"]}
                alt="Portrait du créateur de l'annonce"
                className="conteneurPortrait__nom__portrait"
              />
            </div>
          </section>
          <StarsColors
            starsInits={5}
            empty={[1, 2, 3, 4, 5]}
            starsValue={logementFind["rating"]}
            logementFind={logementFind}
          />
          <collpaspe>
            <details>
              <summary>Coolbar</summary>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </details>
          </collpaspe>
          <collpaspe>
            <details>
              <summary>Pas coolbar</summary>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </details>
          </collpaspe>
        </article>
      )}
    </main>
  );
}

export default Logement;
