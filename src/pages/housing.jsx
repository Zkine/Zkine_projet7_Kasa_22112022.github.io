import { useFetch } from "../components/controllerFetch";
import { Loader } from "../styles/Atoms";
import { useParams } from "react-router-dom";
import Slideshow from "../components/slideshow";
import StarsColors from "../components/starsColors";

function Logement() {
  
  const params = useParams();

  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/data.json`
  );
  const logementsData = data;
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  const logementFind =
    logementsData.forEach && logementsData.find((el) => el["id"] === params.id);
    

  

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <article>
        <Slideshow logementFind={logementFind} />
        <StarsColors logementFind={logementFind} />
        </article>
      )}
    </main>
  );
}

export default Logement;
