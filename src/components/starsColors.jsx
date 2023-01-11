import Etoilevide from "../assets/Etoileblanche.svg";
import Etoilecolor from "../assets/Etoilecolor.svg";
import "../styles/starsColors.scss";
function Stars({ logementFind, starsValue, starsType, starsInits, empty }) {
 
  const starsInit = starsInits === empty || (
    <img src={Etoilevide} alt="Etoile vide" />
  );

  const range = [1, 2, 3, 4, 5];

  const starsResult = starsType === logementFind["rating"] || (
    <img src={Etoilecolor} alt="Etoile color" />
  );
  console.log(logementFind["tags"])

  return (
    <section >
        <div>
          {empty.map(
            (starsElem) =>
              starsInits >= starsElem && (
                <span key={starsElem.toString()}>{starsInit}</span>
              )
          )}
          {range.map(
            (rangeElem) =>
              starsValue >= rangeElem && (
                <span key={rangeElem.toString()} className="initStars ">
                  {starsResult}
                </span>
              )
          )}
        
      </div>
    </section>
  );
}

export default Stars;
