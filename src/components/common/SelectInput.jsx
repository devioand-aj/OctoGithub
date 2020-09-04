import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import "../../styles/selectInput.css";

const SelectInput = ({ selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => {
    setOpen(!open);
  };

  function getSelectedLabel(value) {
    if (value === "stargazers_count") return "Stars";
    if (value === "forks_count") return "Forks";
    if (value === "size") return "Size";
    else return value;
  }

  return (
    <>
      <div className="select-input" onClick={handleOpenClose}>
        {getSelectedLabel(selected)}
        <div className="select-input-icon">
          {open ? <FiChevronUp /> : <FiChevronDown />}
        </div>
      </div>
      {open && (
        <ul className="select-input-option-container">
          <li
            value="stars"
            onClick={() => {
              onSelectedChange("stargazers_count");
              handleOpenClose();
            }}
            className="select-input-item"
          >
            Stars
          </li>
          <li
            value="forks"
            onClick={() => {
              onSelectedChange("forks_count");
              handleOpenClose();
            }}
            className="select-input-item"
          >
            Forks
          </li>
          <li
            value="size"
            onClick={() => {
              onSelectedChange("size");
              handleOpenClose();
            }}
            className="select-input-item"
          >
            Size
          </li>
        </ul>
      )}
    </>
  );
};

export default SelectInput;
