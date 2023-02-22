import { useState } from "react";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/main.scss";

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
    <div className="conteneurcollapse">
      <button className="conteneurcollapse__button" onClick={selected}>
        <span className="conteneurcollapse__titre">{titre}</span>
        <span className="conteneurcollapse--icone">
          <IoIosArrowDown />
        </span>
      </button>
      {Open && (
        <div className="conteneurcollapse__description">
          {description}
        </div>
      )}
    </div>
  );
}

export default Collapse;
