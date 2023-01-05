import page404 from "../../assets/404.svg";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import { Link } from "react-router-dom";

const Stylesection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: auto;
  height: 647px;
`;

const Styleimg = styled.img`
  height: 263px;
  width: 597px;
`;

const Stylep1 = styled.p`
  font-size: 36px;
  color: ${colors.primary};
`;

const Styleplink = styled(Link)`
  font-size: 18px;
  color: ${colors.primary};
  margin-top: 100px;
`;

function Error() {
  return (
    <main>
      <Stylesection>
        <Styleimg src={page404} alt="Error 404" />
        <Stylep1>Oups! La page que vous demandez n'existe pas.</Stylep1>
        <Styleplink to={`/`}>Retourner sur la page d’accueil</Styleplink>
      </Stylesection>
    </main>
  );
}

export default Error;
