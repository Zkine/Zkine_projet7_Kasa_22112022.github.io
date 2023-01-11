import ImgHome from "../assets/ImgHome.png";
import { Link } from "react-router-dom";
import { Loader } from "../styles/Atoms";
import { useFetch } from "../components/controllerFetch";
import "../styles/home.scss";


function Home() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/data.json`
  );
  const logementData = data;

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  

  return (
    <main>
      <article>
        <section>
          <div className="styleTitre">
            <h1 className="styleTitre__h1">Chez vous, partout et ailleurs</h1>
            <img src={ImgHome} alt="la montagne" className="styleTitre__h1__img" />
          </div>
        </section>
        {isLoading ? (
          <Loader />
        ) : (
          <section className="logement">
            {logementData.forEach &&
              logementData.map((item) => (
                <div className="logement__conteneur" key={item["id"]}>
                  <Link  to={`/Logement/${item["id"]}`}>
                    <img src={item["cover"]} alt={item["description"]} className="logement__conteneur__img"/>
                    <figcaption className="logement__conteneur__img__descrip">{item["title"]}</figcaption>
                  </Link>
                </div>
              ))}
          </section>
        )}
      </article>
    </main>
  );
}

export default Home;
