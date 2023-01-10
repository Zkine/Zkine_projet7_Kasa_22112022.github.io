import Etoileblanche from "../assets/Etoileblanche.svg";
import Etoilecolor from "../assets/Etoilecolor.svg";
import colors from "../styles/colors";

function stars({ logementFind, starsValue, starsType }) {

  

  const h1 = {
    fontSize: "26px",
    height: "51px",
    color: colors.primary,
    margin: "0 55px",
  };

  const portrait = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
  };

  const range = [1,2,3,4,5];

  const starsResult =
  starsType=== logementFind["rating"] ? (
      <img src={Etoileblanche} alt="Etoile blanche" />
    ) : (
      <img src={Etoilecolor} alt="Etoile color" />
    );

   const adc = range.map((rangeElem) =>
  starsValue >= rangeElem ? (
    <span key={rangeElem.toString()}>{starsResult}</span>
  ) : null
) 

  console.log(adc);

  return (
    <section>
      <div>
        <div>
          <h1 style={h1}>{logementFind["title"]}</h1>
          <p>{logementFind["location"]}</p>
        </div>
        <div>{logementFind["tags"]}</div>
      </div>
      <div>
        <p>{logementFind["host"]["name"]}</p>
        <img
          src={logementFind["host"]["picture"]}
          alt="Portrait du créateur de l'annonce"
          style={portrait}
        />
        <div>
          {range.map(
            (rangeElem) =>
              (starsValue = rangeElem && (
                <span key={rangeElem.toString()}>{starsResult}</span>
              ))
          )}
        </div>
      </div>
    </section>
  );
}

export default stars;
