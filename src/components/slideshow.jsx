import FlècheDroite from "../assets/FlècheDroite.svg";
import FlècheGauche from "../assets/FlècheGauche.svg";
import { useState } from "react";
import "../styles/slideshow.scss";

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
        <div className="conteneurImg">
          <img
            src={FlècheGauche}
            alt="Flèche de navigation à gauche"
            className="conteneurImg__leftArrowStyles"
            onClick={goToPrevious}
          />
          <img
            src={FlècheDroite}
            alt="Flèche de navigation à droite"
            className="conteneurImg__rightArrowStyles"
            onClick={goToNext}
          />
          <div
            style={{
              backgroundImage: `url(${logementFind.pictures[currentIndex]})`,
            }}
            className="conteneurImg__slideStyles"
          ></div>
          <div className="conteneurImg__conteur">
            {currentIndex + 1}/{logementFind.pictures.length}
          </div>
        </div>
      ) : (
        <div className="conteneurImg">
          <div
            style={{
              backgroundImage: `url(${logementFind.pictures[currentIndex]})`,
            }}
            className="conteneurImg__slideStyles"
          ></div>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
