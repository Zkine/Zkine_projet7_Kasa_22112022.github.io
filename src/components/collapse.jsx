import { useState } from "react";
import "../styles/collapse.scss";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Collapse({ titre, description }) {
  const [Open, setIsOpen] = useState(false);

  function selected(e) {
    setIsOpen(!Open);

    const arrow = e.target.children[1];
    if (!arrow.classList.contains("rotate")) {
      arrow.classList.add("rotate");
    } else {
      arrow.classList.remove("rotate");
    }
  }

  return (
    <div className="conteneurCollapse">
      <button className="conteneurCollapse__button" onClick={selected}>
        <span className="conteneurCollapse__titre">{titre}</span>
        <span className="conteneurCollapse--icone">
          <IoIosArrowDown />
        </span>
      </button>
      {Open && (
        <div className="conteneurCollapse__description">
          {description}
        </div>
      )}
    </div>
  );
}

export default Collapse;
