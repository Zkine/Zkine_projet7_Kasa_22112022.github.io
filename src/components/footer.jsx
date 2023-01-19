import logoFooter from "../assets/logoFooter.svg";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer className="StyleFooter">
      <div>
        <p className="StyleFooter__p">© 2020 Kasa. All rights reserved</p>
      </div>
      <div>
        <img src={logoFooter} alt="Logo Kasa Footer" />
      </div>
    </footer>
  );
}

export default Footer;
