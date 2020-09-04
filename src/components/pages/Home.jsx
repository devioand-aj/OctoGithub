import React, { useEffect, useContext, useState } from "react";
import { MdLaptopMac } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsCalendar } from "react-icons/bs";

import Avatar from "../common/Avatar";
import Paper from "../common/Paper";
import Chart from "../common/Chart";
import SelectInput from "../common/SelectInput";
import Repos from "../Repos";
import GithubContext from "../../context/githubContext";
import useUrlQuery from "../../hooks/useUrlQuery";
import useLangStats from "../../hooks/useLangStats";
import useTopRatedBy from "../../hooks/useTopRatedBy";
import getStatsObjects from "../../utils/getStatsObjects";
import getParsedDate from "../../utils/getParsedDate";
import Spinner from "../common/Spinner";
import "../../styles/home.css";

const Home = () => {
  const [ratedBby, setRateBy] = useState("stargazers_count");

  const githubContext = useContext(GithubContext);
  const {
    user,
    userId,
    repos,
    isLoading,
    langStats,
    onSetUserId,
    onGetUser,
    onGetRepos,
    onGetStats,
  } = githubContext;
  const userIdParam = useUrlQuery("id");

  useEffect(() => {
    onSetUserId(userIdParam);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (userId) {
      onGetUser();
      onGetStats();
      onGetRepos();
    }
    // eslint-disable-next-line
  }, [userId]);

  const statsData = useLangStats(langStats);
  const topRatedRepos = useTopRatedBy(repos, ratedBby, "asc");

  const firstFiveRatedRepos = topRatedRepos.slice(0, 5);
  const statsData2 = useLangStats(
    getStatsObjects(
      firstFiveRatedRepos,
      ["name", "stargazers_count"],
      ["label", "value"]
    )
  );

  const {
    company,
    followers,
    following,
    location,
    login,
    name,
    avatar_url,
    public_repos,
    created_at,
  } = user;

  const handleSelectInputChange = (e) => {
    console.log(e);
    setRateBy(e);
  };

  return (
    <div className="home-page">
      <div className="header">
        <Spinner visible={isLoading} />
        {!isLoading && (
          <>
            <Avatar size={180} image={avatar_url} />
            <div className="label-primary">{name}</div>
            <div
              onClick={() => window.open(`https://github.com/${login}`)}
              className="label-secondary link"
            >
              @{login}
            </div>
            <div className="detail-container">
              {company && (
                <div className="detail-item">
                  <span className="icon">
                    <MdLaptopMac />
                  </span>{" "}
                  <span className="label">{company}</span>
                </div>
              )}
              {location && (
                <div className="detail-item">
                  <span className="icon">
                    <GoLocation />
                  </span>{" "}
                  <span className="label">{location}</span>
                </div>
              )}
              <div className="detail-item">
                <span className="icon">
                  <BsCalendar />
                </span>{" "}
                <span className="label">
                  Joined {getParsedDate(created_at)}
                </span>
              </div>
            </div>
            <div className="paper-container">
              <Paper title={public_repos} subTitile="repositories" />
              <Paper title={followers} subTitile="followers" />
              <Paper title={following} subTitile="followings" />
            </div>
          </>
        )}
      </div>

      <div className="chart-section">
        <div className="charts">
          <div className="chart">
            <Chart
              statsData={statsData}
              legend={true}
              label="Top Languages"
              chartName="Pie"
              height={300}
            />
          </div>
          <div className="chart">
            <Chart
              statsData={statsData2}
              legend={false}
              label="Top Repos"
              chartName="Bar"
              height={300}
            />
          </div>
        </div>
      </div>

      <div className="gutter"></div>

      <div className="repos-section">
        <div className="repos-section-header">
          <h1 className="label-repo">Top Repos</h1>
          <p>by</p>
          <div>
            <SelectInput
              selected={ratedBby}
              onSelectedChange={handleSelectInputChange}
            />
          </div>
        </div>
        <Repos repos={topRatedRepos} />
      </div>
    </div>
  );
};

export default Home;
