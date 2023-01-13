import Collapse from "../components/collapse";
import ImgAbout from "../assets/ImgAbout.png";
import ImgAboutMobile from "../assets/ImgAboutMobile.png";
import "../styles/about.scss";


function About() {



  const titre = [

    {titre: "Fiabilité"},
  
    {titre: "Respect"} ,
  
    {titre: "Service"} ,
  
    {titre: "Sécurité"} 
  ];

  const description = [{
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },

  {
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },

  {
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.",
  },

  {
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
  ]

  const paragrapheAbout = [{
    titre: "Fiabilité",
    description:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },

  {
    titre: "Respect",
    description:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },

  {
    titre: "Service",
    description:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.",
  },

  {
    titre: "Sécurité",
    description:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
  ]

 
  return (
    <main>
    <section className="conteneurAbout">
    <div className="conteneurAbout__conteneurimg">
    <picture>
    <source srcSet={ImgAboutMobile} />
    <img src={ImgAbout} alt="Très belle montagne" className="conteneurAbout__conteneurimg__img"/>
    </picture>
      
    </div>
  </section>
    <Collapse paragrapheAbout = {paragrapheAbout} titre={titre} description = {description}/>
    </main>
  );
}

export default About;
