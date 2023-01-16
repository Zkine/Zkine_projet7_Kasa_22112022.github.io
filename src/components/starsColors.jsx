import Etoilevide from "../assets/Etoileblanche.svg";
import Etoilecolor from "../assets/Etoilecolor.svg";
import "../styles/starsColors.scss";


function Stars({ logementFind, starsValue, starsType, starsInits, empty }) {
 
  const starsInit = starsInits === empty || (
    <img src={Etoilevide} alt="Etoiles vides" />
  );

  const range = [1, 2, 3, 4, 5];

  const starsResult = starsType === logementFind["rating"] || (
    <img src={Etoilecolor} alt="Etoiles coleurs" />
  );

  return (
        <div className="conteneurStars">
        <div className="conteneurStars__Style"> 
          {range.map(
            (rangeElem) =>
              starsValue >= rangeElem && (
                <span className="conteneurStars__Style__initStarsColeurs__initStars" key={rangeElem.toString()} >
                  {starsResult}
                </span>
              )
          )}
          {empty.map(
            (starsElem) =>
              starsInits >= starsElem && (
                <span className="conteneurStars__Style__initStarsColeurs test" key={starsElem.toString()}>{starsInit}</span>
              )
          )}
          </div>
      </div>
  );
}

export default Stars;
