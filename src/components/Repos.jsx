import React from "react";
import FlipMove from "react-flip-move";

import RepoCard from "./common/RepoCard";
import "../styles/repos.css";

const Repos = ({ repos }) => {
  return (
    // <div className="repos-container">
    <FlipMove className="repos-container">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </FlipMove>
    // </div>
  );
};

export default Repos;
