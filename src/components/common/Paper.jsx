import React from "react";
import "../../styles/paper.css";

const Paper = ({ title = 1200, subTitile = "Repositories" }) => {
  return (
    <div className="paper">
      <div className="title">{title}</div>
      <div className="subtitle">{subTitile}</div>
    </div>
  );
};

export default Paper;
