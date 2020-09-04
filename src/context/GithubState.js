import React, { useReducer } from "react";
import axios from "axios";
import GhPolyglot from "gh-polyglot";

import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import {
  GET_USER,
  GET_LANG_STATS,
  GET_REPOS,
  GET_USER_ID,
  SET_LOADING,
} from "./types";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    langStats: [],
    repos: [],
    userId: "",
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = (isLoading) =>
    dispatch({ type: SET_LOADING, payload: isLoading });

  const handleSetUserId = (userId) => {
    dispatch({
      type: GET_USER_ID,
      payload: userId,
    });
  };

  const handleUserDetail = async () => {
    setLoading(true);

    const { userId } = state;

    const { data } = await axios.get(
      `https://api.github.com/users/${userId}?&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: data,
    });

    setLoading(false);
  };

  const handleUserStatsDetail = async () => {
    const { userId } = state;

    new GhPolyglot(`${userId}/git-stats`).userStats(function (err, stats) {
      if (err) return err;

      return dispatch({
        type: GET_LANG_STATS,
        payload: stats,
      });
    });
  };

  const handleUserRepos = async () => {
    const { userId } = state;

    let page = 1;
    const perPage = 100;
    let repos = [];

    while (true) {
      const { data } = await axios.get(
        `https://api.github.com/users/${userId}/repos?per_page=${perPage}&page=${page}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );
      repos = [...repos, ...data];

      if (data.length !== perPage) break;

      page++;
    }

    dispatch({
      type: GET_REPOS,
      payload: repos,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        userId: state.userId,
        repos: state.repos,
        isLoading: state.isLoading,
        langStats: state.langStats,
        onSetUserId: handleSetUserId,
        onGetUser: handleUserDetail,
        onGetStats: handleUserStatsDetail,
        onGetRepos: handleUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubState;
