import logo from "../../assets/logo.svg";

function Banner({ children }) {
  return (
    <div>
    <nav>
        <ul>
            <il>ACCUEIL</il>
            <il>A PROPOS</il>
        </ul>
    </nav>
      <img src={logo} alt="Logo Kasa" className="lmj-logo" />
    </div>
  );
}

export default Banner;
