import FlècheDroite from "../assets/FlècheDroite.svg";
import FlècheGauche from "../assets/FlècheGauche.svg";
import { useState } from "react";
import "../styles/main.scss";

function Slideshow({ logementFind }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? logementFind.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === logementFind.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section>
      {logementFind.pictures.length !== 1 ? (
        <div className="conteneurimg">
          <img
            src={FlècheGauche}
            alt="Flèche de navigation à gauche"
            className="conteneurimg__leftarrowstyles"
            onClick={goToPrevious}
          />
          <img
            src={FlècheDroite}
            alt="Flèche de navigation à droite"
            className="conteneurimg__rightarrowstyles"
            onClick={goToNext}
          />
          <div
            style={{
              backgroundImage: `url(${logementFind.pictures[currentIndex]})`,
            }}
            className="conteneurimg__slidestyles"
          ></div>
          <div className="conteneurimg__conteur">
            {currentIndex + 1}/{logementFind.pictures.length}
          </div>
        </div>
      ) : (
        <div className="conteneurimg">
          <div
            style={{
              backgroundImage: `url(${logementFind.pictures[currentIndex]})`,
            }}
            className="conteneurimg__slidestyles"
          ></div>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
