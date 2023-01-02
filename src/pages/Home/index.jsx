import ImgHome from "../../assets/ImgHome.png";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DivStyle = styled.div`
  position: relative;
  height: 223px;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const H1style = styled.h1`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  line-height: 142.6%;
  color: #ffffff;
  z-index: 1;
`;

const Imgstyle = styled.img`
  height: 223px;
  border-radius: 25px;
  filter: brightness(60%);
`;

const SectionStyle = styled.section`
  position: relative;
  margin: auto;
  width: 1240px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 60px;
  background-color: #f7f7f7;
  border-radius: 25px;
  padding: 20px 0px 20px 0px;
`;

const DivStyleImg = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  margin: 25px 0px 25px 0px;
  position: relative;
  background: linear-gradient(#e7167b4a, #080708);
`;

const StyleImg = styled.img`
  width: 340px;
  height: 340px;
  border-radius: 10px;
  object-fit: cover;
`;
const StyleFigcaption = styled.figcaption`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: #ffffff;
  width: 220px;
`;

function Home() {
  const [data, setData] = useState([]);
  const [error] = useState(false);

  const getData = () => {
    fetch("http://localhost:3000/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setData(data);
      })
      .catch(function (err) {
        alert("Une erreur est survenue");
      });
  };
  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <main>
      <article>
        <section>
          <DivStyle>
            <H1style>Chez vous, partout et ailleurs</H1style>
            <Imgstyle src={ImgHome} alt="Logo Kasa" />
          </DivStyle>
        </section>
        <SectionStyle>
          {data &&
            data.length > 0 &&
            data.map((item) => (
              <DivStyleImg key={item["id"]}>
                <Link to={`/${item["id"]}`}>
                  <StyleImg src={item["cover"]} alt={item["description"]} />
                  <StyleFigcaption>{item["title"]}</StyleFigcaption>
                </Link>
              </DivStyleImg>
            ))}
        </SectionStyle>
      </article>
    </main>
  );
}

export default Home;
