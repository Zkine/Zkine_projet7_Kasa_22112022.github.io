import { useState } from "react";
import "../styles/collapse.scss";
import React from 'react';

function Collapse({ paragrapheAbout }) {
  const [Open, setIsOpen] = useState(false);


  function selected(e) {
    setIsOpen(!Open);
    
    console.log(e);
    if (Open === e ) {
      return setIsOpen(true);
    } else  {
      setIsOpen(e);
    }
  }
 

  return (
    <article className="conteneurArticle">
      {paragrapheAbout.map((element, e, index) => (
        <div>
          <div className="conteneurTitre" key={element}>
            <p className="conteneurTitre__titre">{element["titre"]}</p>
            <span
              className={
                Open === e
                  ? "conteneurTitre__titre__SpanStyle"
                  : "conteneurTitre__titre__SpanStyle__SpanStylebas"
              }
              onClick={() => {
                selected(e);
              }}
            ></span>
          </div>
          <div
            className="conteneurTitre__titre__SpanStyle__SpanStylebas__conteneurP"
            key={index}
          >
            <p className={Open === e ? "contentShow" : "content"}>
              {element["description"]}
            </p>
          </div>
        </div>
      ))}
    </article>
  );
}

export default Collapse;
