import logoFooter from "../../assets/logoFooter.svg";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyleFooter = styled.footer`
  background-color: #000000;
  height: 209px;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
`;

const Stylep = styled.p`
  color: ${colors.secondary};
`;

function Footer() {
  return (
    <StyleFooter>
      <div>
        <Stylep>© 2020 Kasa. All rights reserved</Stylep>
      </div>
      <div>
        <img src={logoFooter} alt="Logo Kasa Footer" />
      </div>
    </StyleFooter>
  );
}

export default Footer;
