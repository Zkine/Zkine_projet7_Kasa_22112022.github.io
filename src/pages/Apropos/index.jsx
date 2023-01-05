import ImgPropos from "../../assets/ImgPropos.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import vectorhaut from "../../assets/vectorhaut.svg";
import { useState } from "react";
import vectorbas from "../../assets/vectorbas.svg";

const DivStyle = styled.div`
  position: relative;
  height: 223px;
  display: flex;
  justify-content: center;
  margin: 60px 0px 60px 0px;
`;

const ImgStyle = styled.img`
  height: 223px;
  border-radius: 25px;
  filter: brightness(60%);
`;

const ArticleStyle = styled.article`
  background-color: ${colors.backgroundLight};
  margin: auto;
  width: 1023px;
  border-radius: 5px;
`;

const DivH1style = styled.div`
  width: 1023px;
  height: 47px;
  border-radius: 5px;
  background-color: ${colors.primary};
  position: relative;
`;

const DivH1styleClose = styled.div`
  width: 1023px;
  height: 47px;
  border-radius: 5px;
  background-color: ${colors.primary};
  position: relative;
  margin-bottom: 20px;
`;

const H1Style = styled.h1`
  color: ${colors.secondary};
  position: absolute;
  left: 20px;
  top: 20%;
  margin: 0px;
  font-size: 24px;
`;

const SpanStyle = styled.span`
  background-image: url(${vectorhaut});
  position: absolute;
  right: 20px;
  top: 35%;
  width: 24px;
  height: 15px;
`;

const SpanStylebas = styled.span`
  background-image: url(${vectorbas});
  position: absolute;
  right: 20px;
  top: 35%;
  width: 24px;
  height: 15px;
`;

const DivPStyle = styled.div`
  margin-bottom: 25px;
`;

const PStyle = styled.p`
  color: ${colors.primary};
  margin: auto;
  font-size: 24px;
  padding: 20px 10px 10px 10px;
`;

function Home() {
  const [fiabiliteOpen, setIsOpenfiabilite] = useState(false);
  const [respectOpen, setIsOpenrespect] = useState(false);
  const [serviceOpen, setIsOpenservice] = useState(false);
  const [sécuritéOpen, setIsOpensécurité] = useState(false);

  const fiabilite = {
    titre: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  };

  const respect = {
    titre: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  };

  const service = {
    titre: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.",
  };

  const sécurité = {
    titre: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l&apos;hôte qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  const handleOnClickfiabilite = () => {
    setIsOpenfiabilite(!fiabiliteOpen);
  };

  const handleOnClickrespect = () => {
    setIsOpenrespect(!respectOpen);
  };

  const handleOnClickservice = () => {
    setIsOpenservice(!serviceOpen);
  };

  const handleOnClicksécurité = () => {
    setIsOpensécurité(!sécuritéOpen);
  };

  return (
    <main>
      <section>
        <section>
          <DivStyle>
            <ImgStyle src={ImgPropos} alt="Très belle montagne" />
          </DivStyle>
        </section>
        <ArticleStyle>
            {fiabiliteOpen ? (
              <div>
          <DivH1style>
            <H1Style>{fiabilite.titre}</H1Style>
            <SpanStyle
              onClick={() => handleOnClickfiabilite(false)}
            ></SpanStyle>
          </DivH1style>
          <DivPStyle>
              <PStyle>{fiabilite.description}</PStyle>
          </DivPStyle>
          </div>
          ) : (
            <div>
          <DivH1styleClose>
            <H1Style>{fiabilite.titre}</H1Style>
            <SpanStylebas
              onClick={() => handleOnClickfiabilite(false)}
            ></SpanStylebas>
          </DivH1styleClose>
          </div>
            )}
        </ArticleStyle>
        <ArticleStyle>
        {respectOpen ? (
              <div>
              <DivH1style>
            <H1Style>{respect.titre}</H1Style>
            <SpanStyle onClick={() => handleOnClickrespect(false)}></SpanStyle>
          </DivH1style>
          <DivPStyle>
          <PStyle>{respect.description}</PStyle>
          </DivPStyle>
          </div>
          ) : (
            <div>
          <DivH1styleClose>
            <H1Style>{respect.titre}</H1Style>
            <SpanStylebas
              onClick={() => handleOnClickrespect(false)}
            ></SpanStylebas>
          </DivH1styleClose>
          </div>
            )}
        </ArticleStyle>
        <ArticleStyle>
        {serviceOpen ? (
              <div>
              <DivH1style>
            <H1Style>{service.titre}</H1Style>
            <SpanStyle onClick={() => handleOnClickservice(false)}></SpanStyle>
          </DivH1style>
          <DivPStyle>
          <PStyle>{service.description}</PStyle>
          </DivPStyle>
          </div>
          ) : (
            <div>
          <DivH1styleClose>
            <H1Style>{service.titre}</H1Style>
            <SpanStylebas
              onClick={() => handleOnClickservice(false)}
            ></SpanStylebas>
          </DivH1styleClose>
          </div>
            )}
        </ArticleStyle>
        <ArticleStyle>

        {sécuritéOpen ? (
              <div>
              <DivH1style>
            <H1Style>{sécurité.titre}</H1Style>
            <SpanStyle onClick={() => handleOnClicksécurité(false)}></SpanStyle>
          </DivH1style>
          <DivPStyle>
          <PStyle>{sécurité.description}</PStyle>
          </DivPStyle>
          </div>
          ) : (
            <div>
          <DivH1styleClose>
            <H1Style>{sécurité.titre}</H1Style>
            <SpanStylebas
              onClick={() => handleOnClicksécurité(false)}
            ></SpanStylebas>
          </DivH1styleClose>
          </div>
            )}
        </ArticleStyle>
      </section>
    </main>
  );
}

export default Home;
