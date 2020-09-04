import React, { useEffect, useContext, useState, forwardRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineFork } from "react-icons/ai";

import GithubContext from "../../context/githubContext";
import getParsedDigits from "../../utils/getParsedDigits";
import "../../styles/repoCard.css";

const RepoCard = forwardRef(({ repo }, ref) => {
  const githubContext = useContext(GithubContext);
  const { langStats } = githubContext;

  const [color, setColor] = useState("red");

  const {
    name: title,
    description,
    language,
    stargazers_count: stars,
    forks_count: forks,
    size,
  } = repo;

  useEffect(() => {
    const stats = langStats.find((stats) => stats.label === repo.language);
    if (stats) setColor(stats.color);
    // eslint-disable-next-line
  }, [langStats]);

  return (
    <div className="main-repoCard" ref={ref}>
      <h1 className="title">{title}</h1>
      <div className="description">{description}</div>
      <div className="detailsContainer">
        <div className="ratings">
          <div className="icon-label-container">
            <div className="icon">
              <GoPrimitiveDot size={20} color={color} />
            </div>
            <div className="label">{language}</div>
          </div>
          <div className="icon-label-container">
            <div className="icon">
              <AiFillStar color="darkgrey" size={18} />
            </div>
            <div className="label">{getParsedDigits(stars)}</div>
          </div>
          <div className="icon-label-container">
            <div className="icon">
              <AiOutlineFork color="darkgrey" size={18} />
            </div>
            <div className="label">{getParsedDigits(forks)}</div>
          </div>
        </div>

        <div className="size-container">{getParsedDigits(size)} KB</div>
      </div>
    </div>
  );
});

export default RepoCard;
