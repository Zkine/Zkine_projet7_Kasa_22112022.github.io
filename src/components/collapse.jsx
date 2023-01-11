import { useState } from "react";
import "../styles/collapse.scss";



function Collapse({ paragrapheAbout }) {
  const [Open, setIsOpen] = useState(true);

  function selected(e) {
    if (Open === e) {
      return setIsOpen(true);
    }else {
      return setIsOpen(e)
  }
}
  return (
      <article className="conteneurArticle">
        {paragrapheAbout.map((element, e, index) => (
              <div>
                <div className="conteneurh1" key={element}>
                  <p className="conteneurh1__h1">{element["titre"]}</p>
                  <span 
                    className={Open === e ? "conteneurh1__h1__SpanStyle" : "conteneurh1__h1__SpanStyle__SpanStylebas"}
                    onClick={() => {selected(e)}}
                  ></span>
                </div>
                <div className="conteneurh1__h1__SpanStyle__SpanStylebas__conteneurP" key={index}>
                  <p className={Open === e ? "contentShow" : "content" } >
                    {element["description"]}
                  </p>
                </div>
              </div>
        ))}
      </article>
  );
}

export default Collapse;
