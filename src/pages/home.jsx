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
          <div className="styletitre">
            <h1 className="styletitre__h1">
              Chez vous, <br className="styletitre__br" />partout et ailleurs
            </h1>
            <img
              src={ImgHome}
              alt="la montagne"
              className="styletitre__img"
            />
          </div>
        </section>
        <section className="logementsection">
          <div className="logementsection__logement">
            {JsnData.map((item) => (
              <div
                className="logementsection__conteneur"
                key={item.id}
              >
                <Link
                  to={`/Logement/${item.id}`}
                  className="logementsection__lien"
                >
                  <img
                    src={item.cover}
                    alt="logement"
                    className="logementsection__img"
                  />
                  <figcaption className="logementsection__descrip">
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
