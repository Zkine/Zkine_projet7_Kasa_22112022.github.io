import ImgHome from "../assets/ImgHome.png";
import JsnData from "../data/data.json";
import { Link } from "react-router-dom";
import { useEffect } from 'react'
import "../styles/main.scss";


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
              Chez vous, <br className="styleTitre__br" />partout et ailleurs
            </h1>
            <img
              src={ImgHome}
              alt="la montagne"
              className="styleTitre__img"
            />
          </div>
        </section>
        <section className="logementSection">
          <div className="logementSection__logement">
            {JsnData.map((item) => (
              <div
                className="logementSection__conteneur"
                key={item.id}
              >
                <Link
                  to={`/Logement/${item.id}`}
                  className="logementSection__lien"
                >
                  <img
                    src={item.cover}
                    alt="logement"
                    className="logementSection__img"
                  />
                  <figcaption className="logementSection__descrip">
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
