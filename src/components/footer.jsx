import logoFooter from "../assets/logoFooter.svg";
import "../styles/main.scss";

function Footer() {
  return (
    <footer className="stylefooter">
      <div>
        <p className="stylefooter__p">© 2020 Kasa. All rights reserved</p>
      </div>
      <div>
        <img src={logoFooter} alt="Logo Kasa Footer" />
      </div>
    </footer>
  );
}

export default Footer;
