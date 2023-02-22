import Etoilevide from "../assets/Etoileblanche.svg";
import Etoilecolor from "../assets/Etoilecolor.svg";

function Stars({ starsInits, rating }) {
  const ranges = [Etoilevide, Etoilevide, Etoilevide, Etoilevide, Etoilevide];
  const calcul = Number(starsInits) - Number(rating);
  const tableauCouleur = [
    Etoilecolor,
    Etoilecolor,
    Etoilecolor,
    Etoilecolor,
    Etoilecolor,
  ];
  
  const rangeResult = ranges.slice(0, calcul);
  const tableauCouleurResult = tableauCouleur.slice(0, rating);
  const tableauValue = [...tableauCouleurResult, ...rangeResult];

  return (
    <div className="conteneurstars">
        {tableauValue.map((rangeElem, i) => (
          <span
            key={i.toString()}
          >
            <img
              src={rangeElem}
              alt="Etoiles coleurs"
              className="etoilesvg"
            />
          </span>
        ))}
    </div>
  );
}

export default Stars;
