import logo from "../../assets/logo.svg";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom"

const Headerstyle = styled.header`
  position: relative;
  width: 1240px;
  height: 68px;
  margin: auto;
`;

const StyleUl = styled.ul`
  list-style: none;
`;

const AccueilLink = styled(Link)`
  position: absolute;
  left: 75.08%;
  right: 13.95%;
  top: 25%;
  bottom: 25%;
  font-size: 20px;
  line-height: 142.6%;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: ${colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${colors.primary};
  }
  &:active {
    cursor: pointer;
    color: ${colors.primary};
  }
`;

const AproposLink = styled(Link)`
  position: absolute;
  left: 87%;
  top: 25%;
  bottom: 25%;
  position: absolute;
  font-size: 20px;
  line-height: 142.6%;
  display: flex;
  align-items: flex-end;
  text-align: right;
  color: ${colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${colors.primary};
  }
  &:active {
    cursor: pointer;
    color: ${colors.primary};
  }
`;

const LogoImage = styled.img`
  position: absolute;
  right: 83.04%;
  height: 68px;
  width: 210.32px;
`;

function Header({ children }) {
  return (
    <Headerstyle>
      <nav>
        <StyleUl>
          <li>
            <AccueilLink to={`/`}>Accueil</AccueilLink>
          </li>
          <li>
            <AproposLink to={`/A_propos`}>A Propos</AproposLink>
          </li>
        </StyleUl>
      </nav>
      <LogoImage src={logo} alt="Logo Kasa" />
    </Headerstyle>
  );
}

export default Header;
