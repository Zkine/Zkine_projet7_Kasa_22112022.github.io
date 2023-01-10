import FlècheDroite from "../assets/FlècheDroite.svg";
import FlècheGauche from "../assets/FlècheGauche.svg";
import colors from "../styles/colors";
import { useState } from "react";

function Slideshow({logementFind}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const DivStyle = {
    position: "relative",
    height: "415px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0px 20px 0px",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "20%",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "20%",
    zIndex: 1,
    cursor: "pointer",
  };

  const slideStyles = {
    width: "1240px",
    height: "415px",
    borderRadius: "25px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${logementFind.pictures[currentIndex]})`,
  };

  const conteur = {
    position: "absolute",
    bottom: "5%",
    transform: "translate(0, -50%)",
    fontVariantNumeric: "tabular-nums",
    color: colors.secondary,
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? logementFind.pictures.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide =
      currentIndex === logementFind.pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section>
      {logementFind.pictures.length !== 1 ? (
        <div style={DivStyle}>
          <img
            src={FlècheGauche}
            alt="Flèche de navigation à gauche"
            style={leftArrowStyles}
            onClick={goToPrevious}
          />
          <img
            src={FlècheDroite}
            alt="Flèche de navigation à droite"
            style={rightArrowStyles}
            onClick={goToNext}
          />
          <div style={slideStyles}></div>
          <div style={conteur}>
            {currentIndex + 1}/{logementFind.pictures.length}
          </div>
        </div>
      ) : (
        <div style={DivStyle}>
          <div style={slideStyles}></div>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
