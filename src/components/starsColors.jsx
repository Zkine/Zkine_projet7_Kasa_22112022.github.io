import Etoilevide from "../assets/Etoileblanche.svg";
import Etoilecolor from "../assets/Etoilecolor.svg";

function Stars({ starsInits, rating }) {
  const ranges = [Etoilevide, Etoilevide, Etoilevide, Etoilevide, Etoilevide];
  const calcul = Number(starsInits) - Number(rating);
  const rangeResult = ranges.slice(0, calcul);
  const tableauCouleur = [
    Etoilecolor,
    Etoilecolor,
    Etoilecolor,
    Etoilecolor,
    Etoilecolor,
  ];
  const tableauCouleurResult = tableauCouleur.slice(0, rating);
  const tableauValue = [...tableauCouleurResult, ...rangeResult];

  return (
    <div className="conteneurStars">
      <div className="conteneurStars__Style">
        {tableauValue.map((rangeElem, i) => (
          <span
            className="conteneurStars__Style__initStarsColeurs"
            key={i.toString()}
          >
            <img
              src={rangeElem}
              alt="Etoiles coleurs"
              className="EtoilecolorSvg"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Stars;
