import ImgHome from "../assets/ImgHome.png";
import JsnData from "../data/data.json";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import { useEffect } from 'react'



function Home() {

  useEffect(() => {
    document.title = "Kasa"
  })
  

  return (
    <main>
      <article>
        <section>
          <div className="styleTitre">
            <h1 className="styleTitre__h1">
              Chez vous,
              <br className="styleTitre__h1__br" />
              partout et ailleurs
            </h1>
            <img
              src={ImgHome}
              alt="la montagne"
              className="styleTitre__h1__br__img"
            />
          </div>
        </section>
        <section className="logementSection">
          <div className="logementSection__logement">
            {JsnData.map((item) => (
              <div
                className="logementSection__logement__conteneur"
                key={item.id}
              >
                <Link
                  to={`/Logement/${item.id}`}
                  className="logementSection__logement__conteneur__lien"
                >
                  <img
                    src={item.cover}
                    alt="Logement"
                    className="logementSection__logement__conteneur__lien__img"
                  />
                  <figcaption className="logementSection__logement__conteneur__lien__img__descrip">
                    {item.title}
                  </figcaption>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

export default Home;
